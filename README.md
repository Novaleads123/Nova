# Nova Leads

## Brand status

Nova Leads is the working product name. Preliminary web research found fragmented
agency/campaign use and no prominent exact-name CRM or lead-generation product,
but exact-domain and official trademark checks remain incomplete.

Multiple established products use Nova CRM or NovaCRM, so that name is not
recommended for Nova Leads. See [brand due diligence](docs/BRAND_DUE_DILIGENCE.md)
before a public commercial launch.

## MVP dashboard

The Nova Leads dashboard is implemented in this repository as a responsive
Vite and React prototype.

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Open the forwarded port 5173, or http://localhost:5173 locally.

```bash
npm run build
npm run preview
```

The dashboard uses sample data. Authentication, lead-source integrations,
Gemini workflows, persistence, credits, and payments are not yet implemented.
