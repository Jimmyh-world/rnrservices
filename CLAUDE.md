# Claude AI Assistant Instructions

<!--
TEMPLATE_VERSION: 1.7.0
TEMPLATE_SOURCE: /home/jimmyb/templates/CLAUDE.md.template
-->

Please refer to **AGENTS.md** for complete development guidelines and project context.

This project follows the [agents.md](https://agents.md/) standard for AI coding assistants.

All AI assistants (Claude, Cursor, GitHub Copilot, Gemini, etc.) should use AGENTS.md as the primary source of project information and development guidelines.

## Quick Reference

### Project: Rock & Roll Services Website

**Type**: Static marketing website (vanilla TypeScript + Vite)
**Status**: Production
**Architecture**: Custom MVC-like with string-based templating

### Core Development Principles
1. **KISS** - Keep It Simple, Stupid
2. **TDD** - Test-Driven Development
3. **SOC** - Separation of Concerns
4. **DRY** - Don't Repeat Yourself
5. **Documentation Standards** - Factual, dated, objective
6. **Jimmy's Workflow** - Red/Green Checkpoints (MANDATORY)
7. **YAGNI** - You Ain't Gonna Need It
8. **Fix Now** - Never defer known issues

### Jimmy's Workflow v2.1
Use for all implementation tasks:

```
🔴 PRE-FLIGHT → 🔴 IMPLEMENT → 🟢 VALIDATE → 🔵 CHECKPOINT
```

- 🔴 **PRE-FLIGHT**: Verify context (files, requirements, dependencies)
- 🔴 **IMPLEMENT**: Write code, build features
- 🟢 **VALIDATE**: Run tests with reasoning + confidence level (HIGH/MEDIUM/LOW)
- 🔵 **CHECKPOINT**: Mark complete with validity conditions

**Confidence Levels**: HIGH (proceed) | MEDIUM (human spot-check) | LOW (human required)

**Invoke**: *"Let's use Jimmy's Workflow to execute this plan"*

**Reference**: See **JIMMYS-WORKFLOW.md** for complete system (v2.1)

### Critical Rules
- ✅ Run type checking before commits: `tsc --noEmit`
- ✅ Build and verify: `npm run build`
- ✅ Never skip checkpoints
- ✅ Include actual dates in documentation
- ✅ Use `gh` CLI for all GitHub operations
- ✅ Respect vanilla TypeScript architecture (no frameworks!)
- ❌ Never proceed without validation passing
- ❌ Never assume - always verify
- ❌ Never add framework complexity (React, Vue, etc.)
- ❌ Never use marketing language in docs

### GitHub Operations
```bash
# Pull Requests & CI/CD
gh pr create --title "Title" --body "Description"
gh pr list                  # View open PRs

# Issues
gh issue create --title "Bug" --body "Description"
gh issue list               # View open issues
```

### Common Commands
```bash
# Development
npm run dev            # Start dev server (localhost:5173)
npm run build          # Build for production
npm run preview        # Preview production build
tsc --noEmit           # Type checking

# Template Compliance
~/templates/tools/audit-project.sh     # Full compliance audit
~/templates/tools/check-version.sh     # Quick version check
```

### Architecture Quick Reference
```
src/
├── main.ts           # Entry point (imports CSS)
├── app.ts            # Controller (manages views)
├── models/           # Data structures
├── views/            # HTML template functions (return strings!)
│   └── components/   # Reusable view components
└── css/
    ├── root.css      # CSS variables
    ├── layouts/      # Page layouts
    └── modules/      # Component styles
```

**View Pattern**: Functions that return HTML strings
```typescript
export const Component = (data: string): string => `<div>${data}</div>`;
```

---

*Last updated: 2026-01-22*
*Template Version: 1.7.0*
