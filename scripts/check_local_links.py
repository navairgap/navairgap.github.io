#!/usr/bin/env python3
"""Check that local HTML href/src references resolve inside this Pages site."""

from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
IGNORED_DIRS = {".git", "node_modules"}


class LocalReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        for name, value in attrs:
            if name in {"href", "src"} and value:
                self.references.append(value.strip())


def html_pages() -> list[Path]:
    return sorted(
        path
        for path in ROOT.rglob("*.html")
        if not any(part in IGNORED_DIRS for part in path.relative_to(ROOT).parts)
    )


def resolve_local_reference(page: Path, reference: str) -> Path | None:
    parsed = urlsplit(reference)
    if parsed.scheme or parsed.netloc or not parsed.path:
        return None

    raw_path = unquote(parsed.path)
    candidate = ROOT / raw_path.lstrip("/") if raw_path.startswith("/") else page.parent / raw_path
    candidate = candidate.resolve()

    try:
        candidate.relative_to(ROOT)
    except ValueError:
        return candidate

    if candidate.is_dir() or not candidate.suffix:
        candidate = candidate / "index.html"
    return candidate


def main() -> int:
    errors: list[str] = []
    pages = html_pages()
    if not pages:
        print("No HTML pages found.")
        return 1

    for page in pages:
        parser = LocalReferenceParser()
        parser.feed(page.read_text(encoding="utf-8"))
        for reference in parser.references:
            target = resolve_local_reference(page, reference)
            if target is None:
                continue
            if not target.is_file():
                relative_page = page.relative_to(ROOT)
                errors.append(f"{relative_page}: {reference!r} -> missing {target}")

    if errors:
        print("Broken local HTML references:")
        print("\n".join(f"- {error}" for error in errors))
        return 1

    print(f"Checked {len(pages)} HTML pages; all local href/src targets exist.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
