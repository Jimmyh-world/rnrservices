# Rock & Roll Services - Company Website

<!--
TEMPLATE_VERSION: 1.7.0
TEMPLATE_SOURCE: /home/jimmyb/templates/AGENTS.md.template
LAST_SYNC: 2026-01-22
SYNC_CHECK: Run ~/templates/tools/check-version.sh to verify you have the latest template version
AUTO_SYNC: Run ~/templates/tools/sync-templates.sh to update (preserves your customizations)
CHANGELOG: See ~/templates/CHANGELOG.md for version history
-->

**STATUS: PRODUCTION** - Last Updated: 2026-01-22

## Repository Information
- **GitHub Repository**: https://github.com/Jimmyh-world/rnrservices
- **Local Directory**: `/home/jimmyb/GitHub/rnrservices`
- **Primary Purpose**: Company website for Rock & Roll Services, a professional event services company specializing in music festivals and outdoor events

## Important Context

<!-- PROJECT_SPECIFIC START: IMPORTANT_CONTEXT -->
Rock & Roll Services is a professional event services company established in 2018. This website serves as the company's digital presence, showcasing their services for major outdoor events including music festivals and concerts.

**Key Background:**
- This is an existing production website (Jimmy didn't build it originally)
- Built with vanilla TypeScript and Vite - no framework bloat
- Very lightweight: only 2 dependencies (vite, vite-plugin-favicons-inject)
- PWA-ready with comprehensive favicon/manifest setup
- Uses a custom MVC-like architecture with string-based templating
<!-- PROJECT_SPECIFIC END: IMPORTANT_CONTEXT -->

## Core Development Principles (MANDATORY)

### 1. KISS (Keep It Simple, Stupid)
- Avoid over-complication and over-engineering
- Choose simple solutions over complex ones
- Question every abstraction layer
- If a feature seems complex, ask: "Is there a simpler way?"

### 2. TDD (Test-Driven Development)
- Write tests first
- Run tests to ensure they fail (Red phase)
- Write minimal code to pass tests (Green phase)
- Refactor while keeping tests green
- Never commit code without tests

### 3. Separation of Concerns (SOC)
- Each module/component has a single, well-defined responsibility
- Clear boundaries between different parts of the system
- Services should be loosely coupled
- Avoid mixing business logic with UI or data access code

### 4. DRY (Don't Repeat Yourself)
- Eliminate code duplication
- Extract common functionality into reusable components
- Use configuration files for repeated settings
- Create shared libraries for common operations

### 5. Documentation Standards
- Always include the actual date when writing documentation
- Use objective, factual language only
- Avoid marketing terms like "production-ready", "world-class", "highly sophisticated", "cutting-edge", etc.
- State current development status clearly
- Document what IS, not what WILL BE

### 5.5. AI-Optimized Documentation
**CRITICAL**: Documentation is structured data for both humans AND AI consumption

**Added**: v1.5.0 | **Enhanced**: v1.5.1

**Purpose**: Enable AI assistants to effectively help during:
- **Development** (now) - Building the system
- **Deployment** (later) - Setting up and configuring
- **Operations** (ongoing) - Monitoring, troubleshooting
- **User Support** (ongoing) - Helping users use the system

**The 7 Principles**:
1. **Structured Data Over Prose** - Use tables, JSON, YAML instead of paragraphs
2. **Explicit Context** - Never assume prior knowledge
3. **Cause-Effect Relationships** - Clear "if X then Y" statements
4. **Machine-Readable Formats** - Consistent, parseable metadata (dates, versions, status)
5. **Searchable Content** - Keywords, anchors, consistent terminology
6. **Version-Stamped** - Date all documentation updates
7. **Cross-Referenced** - Explicit links between related docs

**Complete Standards**: See [~/templates/DOCUMENTATION-STANDARDS.md](~/templates/DOCUMENTATION-STANDARDS.md) for comprehensive guidelines.

### 6. Jimmy's Workflow v2.1 (Red/Green Checkpoints)
**MANDATORY for all implementation tasks**

Use the four-phase checkpoint system to prevent AI hallucination and ensure robust implementation:

```
🔴 PRE-FLIGHT → 🔴 IMPLEMENT → 🟢 VALIDATE → 🔵 CHECKPOINT
```

- 🔴 **PRE-FLIGHT**: Verify context - do I have all files, requirements, dependencies?
- 🔴 **IMPLEMENT**: Write code, build features, make changes
- 🟢 **VALIDATE**: Run explicit validation with documented reasoning and confidence level
- 🔵 **CHECKPOINT**: Mark completion with confidence level and validity conditions

**Critical Rules:**
- NEVER skip PRE-FLIGHT - always verify context first
- NEVER proceed to IMPLEMENT if PRE-FLIGHT status is 🔴 BLOCKED or 🟡 GAPS
- NEVER proceed to next checkpoint without GREEN passing
- ALWAYS document WHY validation proves correctness (reasoning)
- ALWAYS acknowledge what validation does NOT prove (weaknesses)
- ALWAYS document rollback procedures and validity conditions
- ALWAYS disclose when AI validates AI-generated code (COI)

**Confidence Levels:**
- **HIGH**: Proceed automatically
- **MEDIUM**: Human spot-check recommended
- **LOW**: Human validation required

**Reference**: See **JIMMYS-WORKFLOW.md** for complete workflow system (v2.1)

### 7. YAGNI (You Ain't Gonna Need It)
- Don't implement features until they're actually needed
- Resist the urge to "future-proof" or add "might be useful later" code
- Build for current requirements, not hypothetical future ones
- Question every feature: "Do we need this NOW?"

### 8. Fix Now, Not Later
- Fix vulnerabilities immediately when discovered
- Fix warnings immediately (don't suppress or accumulate)
- Fix failing tests immediately
- Address build errors and deprecation warnings as they appear

### 9. Measure Twice, Cut Once
- Always verify your understanding before executing
- Double-check file paths, command syntax, and target locations
- Review the plan before implementation begins

### 10. No Shortcuts (Do It Right)
- Complete the job properly - no half-arsed work
- Don't skip steps to save time
- Implement the full solution, not a "good enough" hack

### 11. Rules Persist (Context Compression Immunity)
- **ALL rules remain in effect after auto-compact/context summarization**
- Core principles are NEVER optional, regardless of context length
- If you can't remember a rule, re-read AGENTS.md

## GitHub Workflow

### Use GitHub CLI (gh) for All GitHub Operations

**Standard Tool**: Use `gh` CLI for all GitHub interactions (issues, PRs, CI/CD monitoring, releases)

**Common Operations:**
```bash
gh pr create --title "Feature" --body "Description"
gh pr list                          # View open PRs
gh issue create --title "Bug" --body "Description"
gh issue list                       # View open issues
gh run list                         # List workflow runs
```

## Service Overview

<!-- PROJECT_SPECIFIC START: SERVICE_OVERVIEW -->
**Rock & Roll Services Website** is the digital presence for a professional event services company. The site showcases their expertise in providing comprehensive services for major outdoor events, particularly music festivals and concerts.

**Key Responsibilities:**
- Present company services and capabilities to potential clients
- Showcase the 6 core service areas (Site Operations, Logistics, Local Knowledge, Backstage Management, Security, Artist Care)
- Provide contact and social media connection points
- Deliver a professional, responsive user experience

**Important Distinctions:**
- This is a **static marketing website**, not a web application
- No backend services or database - pure frontend
- Content is embedded in the codebase, not from a CMS
<!-- PROJECT_SPECIFIC END: SERVICE_OVERVIEW -->

## Current Status

<!-- PROJECT_SPECIFIC START: CURRENT_STATUS -->
✅ **Production Website** - 100% Core Features Complete

- ✅ Landing section with video background
- ✅ Services showcase (6 service cards)
- ✅ Responsive design (mobile-first)
- ✅ Social media integration (Instagram, LinkedIn)
- ✅ PWA-ready (favicon/manifest setup)
- ✅ Production build deployed
- ⚪ Testing infrastructure (not implemented)
- ⚪ AI-driven SEO optimization (planned)
<!-- PROJECT_SPECIFIC END: CURRENT_STATUS -->

## Technology Stack

### Frontend (Vanilla TypeScript)

**Core:**
- **Language**: TypeScript 5.2.2
- **Build Tool**: Vite 5.3.1
- **Styling**: Pure CSS with modular organization
- **Architecture**: Custom MVC-like with string-based templating

**Design:**
- **Fonts**: Bebas Neue (headers), Source Sans 3 (body)
- **Colors**: Primary Black (#0d0d0d), White (#fff), Accent Yellow (#F2CB05)
- **Responsive**: Mobile-first with 600px breakpoint

**Dependencies (Minimal):**
- `vite` - Build tool and dev server
- `vite-plugin-favicons-inject` - Favicon generation

**Testing**: Not currently implemented
**CI/CD**: Not currently configured

## Build & Test Commands

### Development
```bash
# Install dependencies
npm install

# Start development server (usually http://localhost:5173)
npm run dev

# Type checking
tsc --noEmit

# Note: No test suite currently configured
# Note: No linting currently configured
```

### Production
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy (manual - push dist/ to hosting)
```

## Repository Structure

```
rnrservices/
├── src/
│   ├── main.ts                 # Entry point
│   ├── app.ts                  # Main App class (controller)
│   ├── css/                    # Modular CSS organization
│   │   ├── root.css           # CSS variables (colors, fonts)
│   │   ├── style.css          # Global styles
│   │   ├── layouts/           # Page layouts (app.css, home.css)
│   │   └── modules/           # Component styles (header, footer, service, etc.)
│   ├── images/                # Asset images (logos, service images)
│   ├── videos/                # Video assets (hero background)
│   ├── models/
│   │   └── serviceModel.ts    # Service data model
│   └── views/                 # Template/view components
│       ├── appView.ts         # Main app wrapper
│       ├── homeView.ts        # Home page view
│       ├── components/        # Reusable components (header, footer, service, etc.)
│       └── icons/             # SVG icon components
├── dist/                      # Built production assets
├── index.html                 # HTML entry point
├── vite.config.js            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies and scripts
├── AGENTS.md                 # AI assistant guidelines (this file)
├── CLAUDE.md                 # Quick reference for Claude
├── JIMMYS-WORKFLOW.md        # Workflow documentation
├── STATUS.md                 # Project status tracking
└── NEXT-SESSION-START-HERE.md # Session continuity
```

## Development Workflow

### Starting Work on a Task
1. Read this AGENTS.md file for context
2. Check STATUS.md for current progress
3. Review NEXT-SESSION-START-HERE.md for immediate context
4. **Use Jimmy's Workflow**: PRE-FLIGHT → IMPLEMENT → VALIDATE → CHECKPOINT
5. Follow the existing architecture patterns

### Before Committing Code
1. Run type check: `tsc --noEmit`
2. Build and verify: `npm run build`
3. Preview locally: `npm run preview`
4. Update documentation if needed
5. Ensure no credentials are exposed

## Known Issues & Technical Debt

<!-- PROJECT_SPECIFIC START: KNOWN_ISSUES -->
### 🟡 Important Issues
1. **TypeScript image imports** - Missing type declarations for image/video imports (TS2307 errors)
   - Build works via Vite but `tsc` alone fails
   - Fix: Add `vite-env.d.ts` or image module declarations
2. **No test suite** - Project has no testing infrastructure
3. **No linting** - No ESLint or Prettier configured
4. **No CI/CD** - No automated build/deploy pipeline

### 📝 Technical Debt
1. **Add testing** - Consider Vitest for unit tests
2. **Add linting** - ESLint + Prettier for code quality
3. **SEO optimization** - Implement AI-driven SEO best practices
4. **Accessibility audit** - Verify WCAG compliance
<!-- PROJECT_SPECIFIC END: KNOWN_ISSUES -->

## Project-Specific Guidelines

<!-- PROJECT_SPECIFIC START: PROJECT_SPECIFIC_GUIDELINES -->
### Code Style
- **Views**: Pure functions returning HTML strings (no JSX)
- **CSS**: Modular organization - layouts/ for page structure, modules/ for components
- **Imports**: CSS imported in main.ts, components imported in views
- **Naming**: camelCase for files and functions

### Architecture Pattern
This project uses a custom MVC-like pattern:
- **Models** (`src/models/`): Data structures (ServiceModel)
- **Views** (`src/views/`): HTML template functions
- **Controller** (`src/app.ts`): Manages view switching and DOM updates

### Adding New Content
1. Update service data in `src/models/serviceModel.ts`
2. Add new images to `src/images/`
3. Create component view in `src/views/components/`
4. Add corresponding CSS in `src/css/modules/`
<!-- PROJECT_SPECIFIC END: PROJECT_SPECIFIC_GUIDELINES -->

## Common Patterns & Examples

<!-- PROJECT_SPECIFIC START: COMMON_PATTERNS -->
### View Component Pattern
```typescript
// src/views/components/example.ts
export const ExampleComponent = (title: string): string => {
  return `
    <div class="example">
      <h2>${title}</h2>
    </div>
  `;
};
```

### CSS Module Pattern
```css
/* src/css/modules/example.css */
.example {
  display: flex;
  flex-direction: column;
  padding: var(--space-md);
}

.example h2 {
  font-family: var(--header-font);
  color: var(--clr-primary-white);
}
```
<!-- PROJECT_SPECIFIC END: COMMON_PATTERNS -->

## Environment Variables

<!-- PROJECT_SPECIFIC START: ENVIRONMENT_VARIABLES -->
```bash
# No environment variables required for this project
# All configuration is in vite.config.js
```
<!-- PROJECT_SPECIFIC END: ENVIRONMENT_VARIABLES -->

## Troubleshooting

<!-- PROJECT_SPECIFIC START: TROUBLESHOOTING -->
### Common Issues

**Issue**: Dev server not starting
**Solution**: Ensure Node.js is installed and run `npm install` first

**Issue**: Build fails with type errors
**Solution**: Run `tsc --noEmit` to see specific errors, fix in source files

**Issue**: CSS not updating
**Solution**: Vite has HMR for CSS, but check that the CSS file is imported in main.ts
<!-- PROJECT_SPECIFIC END: TROUBLESHOOTING -->

## Resources & References

### Documentation
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Project Files
- `vite.config.js` - Build configuration
- `tsconfig.json` - TypeScript settings
- `package.json` - Dependencies and scripts

## Important Reminders for AI Assistants

1. **Always use Jimmy's Workflow** for implementation tasks
2. **Keep it KISS** - This project is intentionally simple, don't add framework complexity
3. **Respect the architecture** - Views return strings, CSS is modular
4. **No frameworks** - This is vanilla TypeScript by design
5. **Use GitHub CLI** - Use `gh` for all GitHub operations
6. **Fix Now** - Address issues immediately
7. **Document dates** - Include actual dates in all documentation
8. **Validate explicitly** - Run commands, don't assume

---

**This document follows the [agents.md](https://agents.md/) standard for AI coding assistants.**

**Template Version**: 1.7.0
**Last Updated**: 2026-01-22
