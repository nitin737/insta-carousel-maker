export const presets = {
  cobra: {
    topic: "github.com/spf13/cobra",
    slide1: {
      // --- Repo Identity ---
      owner: "spf13",
      repo: "cobra",
      stars: "44.1k",
      // --- Content ---
      bigTitle: "Cobra",
      highlightedText: "Go (golang)",
      description: "A Commander for modern Go (golang) CLI applications.",
      about:
        "A library for creating powerful modern CLI apps. Used by Kubernetes, Docker, GitHub CLI, and 173k+ projects.",
      tags: ["go", "golang", "cli", "cobra", "command-line", "flags", "posix"],
      license: "Apache-2.0",
      activity: "Active",
      // --- Stats ---
      watchers: 364,
      forks: 3154,
      latestRelease: "v1.10.2 Latest",
      // --- Contributors ---
      contributorsCount: 280,
      // --- Language ---
      langGoPct: 98.7,
      langOtherPct: 1.3,
      // --- Appearance ---
      backgroundImage: "slide1-bg.jpg",
    },
    slide2: {
      headline: "Solve CLI Boilerplate with Zero Friction.",
      pain: "We all know the drudgery of writing repetitive code for command-line parsing, flags, and help menus. It clutters your business logic and introduces edge-case bugs.",
      cure: "Cobra abstracts the complexity. With just a few lines, you get bulletproof POSIX-compliant CLI commands.",
      features: [
        "Type-Safe: Leverages Go to keep your compiler happy.",
        "Standardized: Uses only standard Go patterns and POSIX flags.",
        "High Performance: Optimized to avoid unnecessary allocations.",
      ],
      backgroundImage: "background.png",
    },
    slide3: {
      headline: "Standard Library—But Smarter.",
      beforeCode:
        '// 15+ lines of error-prone manual handling\nflag.StringVar(&cfg, "config", "", "config file")\nflag.Parse()\nif len(flag.Args()) < 1 { ... }\n// Nested command logic...',
      afterCode:
        '// 3 lines. Handles parsing, help, and completions.\nvar rootCmd = &cobra.Command{Use: "app"}\nrootCmd.AddCommand(&cobra.Command{Use: "serve"})\nrootCmd.Execute()',
      takeaway:
        "Cobra integrates seamlessly with your existing Go codebase, making it a drop-in upgrade.",
      backgroundImage: "background.png",
    },
    slide4: {
      headline: "Designed for Real-World Go Projects.",
      points: [
        {
          title: "Interface-First",
          desc: "Every component is designed for testability. Mock it easily in your unit tests.",
        },
        {
          title: "Structured Ecosystem",
          desc: "Built-in support for Viper for config management.",
        },
        {
          title: "No Panic",
          desc: "Strict error handling via Execute(). No runtime surprises.",
        },
        {
          title: "Drop-in Replacement",
          desc: "Works alongside your existing codebase without forcing a full refactor.",
        },
      ],
      backgroundImage: "background.png",
    },
    slide5: {
      headline: "Add This to Your Go.mod Today.",
      quickstart: "go get github.com/spf13/cobra@latest",
      minimalSetup:
        'import "github.com/spf13/cobra"\n\nfunc main() {\n    // Your first command takes seconds.\n    rootCmd := &cobra.Command{Use: "app"}\n    rootCmd.Execute()\n}',
      resources: [
        { label: "Read the Docs", url: "cobra.dev" },
        { label: "Source Code", url: "github.com/spf13/cobra" },
      ],
      ctas: [
        { icon: "💾", text: "Save this post for your next refactor." },
        { icon: "💬", text: "Comment your Go username below!" },
        { icon: "⭐", text: "Star us on GitHub if you find it useful." },
        { icon: "➡️", text: "Share with your engineering team!" },
      ],
      backgroundImage: "background.png",
    },
  },
  Carbonyl: {
    topic: "Carbonyl",
    slide1: {
      owner: "fathyb",
      repo: "carbonyl",
      stars: "19.2k",
      bigTitle: "Carbonyl",
      highlightedText: "Go (golang)",
      description:
        "Chromium running inside your terminal with ultra-low footprint",
      about:
        "High-performance browser engine designed for instant terminal rendering, offering Go-driven CLI scraping and automated dashboard integrations.",
      tags: ["go", "golang", "terminal", "chromium", "tui", "browser"],
      readmeText: "Readme",
      license: "BSD-3-Clause",
      activity: "Activity",
      watchers: 93,
      forks: 572,
      latestRelease: "v0.0.3 Latest",
      contributorsCount: 11,
      langGoPct: 88.5,
      langOtherPct: 11.5,
    },
    slide2: {
      headline: "Why Carbonyl for Terminal Browsing?",
      pain: "Traditional headless browsers (like Selenium/Puppeteer) have massive memory overhead exceeding 850MB baseline, slow startup times, and heavy process thrashing.",
      cure: "Carbonyl provides an ultra-low memory footprint under 50MB runtime and sub-second startup executing within native terminal cell structures.",
      features: [
        "High Performance: Real-time 60 FPS quadrant binarization rendering.",
        "Ultra-low Footprint: 18x memory reduction compared to Headless Chrome.",
        "Terminal Native: Stream high-fidelity web views inside Go TUI applications.",
      ],
      backgroundImage: "background.png",
    },
    slide3: {
      headline: "Introducing Carbonyl.",
      beforeCode:
        '# Heavy dependencies and large footprint\npip install selenium webdriver-manager\n# Setup Chrome options, headless flags, etc...',
      afterCode:
        '// Extremely lightweight TUI browsing\nctx := context.Background()\nbrowser := carbonyl.New(ctx)\nresp, _ := browser.Render(ctx, "https://news.ycombinator.com")',
      takeaway:
        "A drop-in replacement for bulky Python Selenium or Puppeteer microservices with zero friction.",
      backgroundImage: "background.png",
    },
    slide4: {
      headline: "Terminal View Rendering in Go.",
      points: [
        {
          title: "Memory Efficient",
          desc: "Eliminates bloated JS/Python stacks for a streamlined execution footprint.",
        },
        {
          title: "Fast Execution",
          desc: "Sub-second startup for rapid iteration in terminal workflows.",
        },
        {
          title: "No Heap Allocations",
          desc: "Pool your terminal cell allocation buffers using sync.Pool.",
        },
        {
          title: "Zero Dependencies",
          desc: "Self-contained architecture for instant terminal rendering.",
        },
      ],
      backgroundImage: "background.png",
    },
    slide5: {
      headline: "Run Modern Web in Your Terminal.",
      quickstart: "docker run -ti fathyb/carbonyl https://youtube.com",
      minimalSetup:
        'import "github.com/fathyb/carbonyl-go"\n\nfunc main() {\n    ctx := context.Background()\n    browser := carbonyl.New(ctx)\n    browser.Render(ctx, "https://news.ycombinator.com")\n}',
      resources: [
        { label: "Read the Docs", url: "github.com/fathyb/carbonyl" },
        { label: "Source Code", url: "github.com/fathyb/carbonyl" },
      ],
      ctas: [
        { icon: "💾", text: "Save this post for your next TUI project." },
        { icon: "💬", text: "Comment your terminal emulator below!" },
        { icon: "⭐", text: "Star us on GitHub if you find it useful." },
        { icon: "➡️", text: "Share with your engineering team!" },
      ],
      backgroundImage: "background.png",
    },
  },
  "chromem-go": {
    topic: "chromem-go",
    slide1: {
      owner: "philippgille",
      repo: "chromem-go",
      stars: "1k",
      bigTitle: "chromem-go",
      highlightedText: "Go (golang)",
      description:
        "In-memory vector database for Go (golang) with zero dependencies.",
      about:
        "An in-memory vector database with optional persistence that enables adding Retrieval-Augmented Generation (RAG) and semantic search directly into your Go binaries without running an external database server.",
      tags: ["go", "golang", "vector-database", "rag", "embeddings", "llm", "sqlite-alternative", "ai"],
      license: "AGPL-3.0",
      activity: "Active",
      watchers: 15,
      forks: 69,
      latestRelease: "v0.7.0 Latest",
      contributorsCount: 12,
      langGoPct: 100.0,
      langOtherPct: 0.0,
      backgroundImage: "slide1-bg.jpg",
    },
    slide2: {
      headline: "Vector Search Without the Infra Overhead.",
      pain: "Running a heavy client-server vector database (like Qdrant or Milvus) just for a local CLI, small internal application, or offline RAG tool introduces massive configuration, network latency, and operational burden.",
      cure: "chromem-go brings the SQLite philosophy to AI tooling. It embeds an entirely zero-dependency vector database directly into your Go binary, utilizing local RAM and simple file persistence with sub-millisecond execution.",
      features: [
        "Pure Go & Zero-Deps: Completely native implementation with no CGO requirements or bloated third-party dependencies.",
        "Concurrently Fast: Leverages Go's native goroutine concurrency model for lightning-fast multi-threaded document indexing and search.",
        "Flexible Creators: Built-in support for OpenAI, Ollama, Cohere, Mistral, and Jina out-of-the-box, plus custom function options.",
      ],
      backgroundImage: "background.png",
    },
    slide3: {
      headline: "From Infra Mess to Local Calls",
      beforeCode:
        '// Complex setup needing an external Docker container and TCP clients\nclient, err := qdrant.NewClient(&qdrant.Config{Host: "localhost", Port: 6334})\nif err != nil {\n\tlog.Fatal(err)\n}\n// Managing connection pools, network drops, and schema synchronization overhead...',
      afterCode:
        '// Simple, embedded, and entirely in-process\ndb := chromem.NewDB()\ncollection, _ := db.CreateCollection("docs", nil, nil)\n\n// Add and query directly inside your local memory space\ncollection.Add(ctx, ids, nil, metadatas, contents)\nresults, _ := collection.Query(ctx, "search query", 2, nil, nil)',
      takeaway:
        "Eliminate network hops and cloud bills for datasets that easily fit in your host's memory configuration.",
      backgroundImage: "background.png",
    },
    slide4: {
      headline: "Designed for Modern Go CLI & AI Tools.",
      points: [
        {
          title: "In-Memory & Persistent",
          desc: "Runs lighting fast in RAM for prototyping, with easy single-file persistence using optimized, optionally gzip-compressed gob files.",
        },
        {
          title: "Chroma-Like API",
          desc: "Familiar interface paradigms inspired by Python's Chroma DB, making transition paths smooth and idiomatic for developers.",
        },
        {
          title: "Advanced Backups",
          desc: "Export and import your entire vector dataset directly into streams using io.Writer/io.Reader with optional AES-GCM encryption.",
        },
        {
          title: "Exact Search Filter",
          desc: "Utilizes comprehensive exhaustive nearest neighbor search via cosine similarity alongside explicit metadata and content $contains filters.",
        },
      ],
      backgroundImage: "background.png",
    },
    slide5: {
      headline: "Go Embed Your Knowledge Base.",
      quickstart: "go get github.com/philippgille/chromem-go",
      minimalSetup:
        'package main\n\nimport (\n\t"context"\n\t"github.com/philippgille/chromem-go"\n)\n\nfunc main() {\n\tctx := context.Background()\n\tdb := chromem.NewDB()\n\tcoll, _ := db.CreateCollection("kb", nil, nil)\n\tcoll.AddDocument(ctx, chromem.Document{ID: "1", Content: "Go CLI tooling rocks!"})\n}',
      resources: [
        { label: "GitHub Repository", url: "github.com/philippgille/chromem-go" },
        { label: "Package Reference", url: "pkg.go.dev/github.com/philippgille/chromem-go" },
      ],
      ctas: [
        { icon: "💾", text: "Save this post to simplify your AI backend architecture later." },
        { icon: "💬", text: "Do you prefer embedded local DBs or dedicated cloud infra?" },
        { icon: "⭐", text: "Drop a star on GitHub for philippgille/chromem-go!" },
        { icon: "➡️", text: "Share this with your fellow Go backend engineers." },
      ],
      backgroundImage: "background.png",
    },
  },
};
