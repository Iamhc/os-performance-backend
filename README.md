OS Performance Dashboard — BackendThe engine behind the OS Performance Dashboard. This backend leverages Node.js for the API layer and Python for low-level system telemetry, providing real-time hardware metrics via RESTful endpoints.✨ FeaturesReal-time Telemetry — Fetches live CPU, Memory, Disk, and Network stats.Python Integration — Uses psutil for highly accurate, cross-platform system monitoring.Scalable API — Built with Express.js to handle rapid polling intervals.CORS Enabled — Ready to communicate with the Next.js frontend.Modular Architecture — Easily extendable to monitor additional metrics (GPU, Temperature, etc.).🛠️ Tech StackTechnologyPurposeNode.jsPrimary API server environmentExpress.jsREST API routing and middlewarePython 3System-level data extractionPsutilPython library for retrieving info on running processes and OSChild ProcessNode.js module to execute Python scripts🚀 Getting StartedPrerequisitesNode.js v18+Python 3.9+pip (Python package installer)InstallationClone the repoBashgit clone https://github.com/Iamhc/os-performance-backend.git
cd os-performance-backend
Install Node.js dependenciesBashnpm install
Install Python dependenciesIt is recommended to use a virtual environment:Bashpip install psutil
Start the serverBashnpm start
The backend will start running at http://localhost:5000.📡 API EndpointsEndpointMethodDescription/api/metricsGETReturns all current system metrics (CPU, RAM, Disk, Net)/api/metrics/cpuGETDetailed per-core CPU usage/api/metrics/memoryGETSpecific RAM and Swap usage data/api/healthGETServer status check📁 Project StructurePlaintextsrc/
├── controllers/    # Request handlers
├── routes/         # API route definitions
├── scripts/        # Python (.py) scripts for system metrics
├── middleware/     # Logging and CORS configurations
└── server.js       # Entry point
⚙️ How it WorksThe Next.js Frontend sends a request to the Node.js API.Node.js triggers a Python script using the child_process module.The Python script utilizes psutil to grab "source of truth" hardware data.The data is piped back to Node.js as JSON and served to the dashboard.🔗 FrontendThis backend is designed to work seamlessly with the React/Next.js frontend:👉 os-performance-frontend👨‍💻 AuthorHimanshu ChoudharyGitHub: @IamhcLinkedIn: himanshu-choudhary
