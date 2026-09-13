# Research & Education Agent Suite

A collection of AI agent skills for academic research tracing and science education activity design.

## 📦 Packages

| Package | Description |
|---------|-------------|
| `research-lineage` | Trace research lineage of any topic across academic literature |
| `science-edu-activity` | Generate pedagogically sound science education activity plans |
| `science-edu-template-trainer` | Analyze existing activity plans and generate standardized templates |
| `cnki-advanced-search` | Automate CNKI (China National Knowledge Infrastructure) advanced search |

## 🚀 Quick Start

Each package is a self-contained skill that can be used with any AI agent framework supporting tool-based prompts (OpenClaw, LangChain, AutoGPT, etc.).

### Standalone Usage

Copy the `skill.md` content into your AI assistant's system prompt or tool definition. Configure the required tools in `config.example.yaml`.

### Required Tools

All packages require a web search capability. Some require additional academic search APIs:

- **Web Search**: Any search API (Tavily, Serper, Bing, Google, etc.)
- **Academic Search** (optional): arXiv API, Semantic Scholar API, Google Scholar
- **Browser Automation** (optional): For CNKI and paywalled sources
- **Web Fetch**: For retrieving page content

## 📁 Structure

Each package follows this structure:

```
pkg-name/
├── README.md              # Package overview and usage
├── skill.md               # Main agent prompt/skill definition
├── references/            # Supporting reference documents
└── config.example.yaml    # Example configuration
```

## 🔧 Configuration

Copy `config.example.yaml` to `config.yaml` and fill in your API keys:

```yaml
web_search:
  provider: tavily  # or serper, bing, google
  api_key: YOUR_KEY

academic:
  arxiv:
    enabled: true   # free, no key needed
  semantic_scholar:
    enabled: true   # free, no key needed
  cnki:
    enabled: false  # requires institutional access
```

## 📄 License

MIT
