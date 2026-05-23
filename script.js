const challenges = [
  // 1. Web & Networking (1-32)
  { id: 1, title: "Port Scanner", cat: "Web & Networking", diff: "Easy", src: "v4" },
  { id: 2, title: "YouTube to MP3 Downloader", cat: "Web & Networking", diff: "Easy", src: "v4" },
  { id: 3, title: "Imageboard (vichan-like)", cat: "Web & Networking", diff: "Easy", src: "v4" },
  { id: 4, title: "URL Shortener Service", cat: "Web & Networking", diff: "Easy", src: "New" },
  { id: 5, title: "Pastebin / Code Snippet Service", cat: "Web & Networking", diff: "Easy", src: "New" },
  { id: 6, title: "IP/URL Obfuscation", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 7, title: "IP Tracking Geolocation Visualizer", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 8, title: "Download Manager (multi-threaded, resume)", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 9, title: "IRC Client", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 10, title: "TCP/UDP Chat Server + Client", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 11, title: "Trivial File Transfer Protocol (TFTP)", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 12, title: "Web Page Crawler", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 13, title: "Static Website Generator", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 14, title: "Stock Market Simulator (Yahoo finance data)", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 15, title: "Booru Image Board Downloader", cat: "Web & Networking", diff: "Medium", src: "v4" },
  { id: 16, title: "HTTP/1.1 Web Server from Scratch", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 17, title: "DNS Resolver (recursive from root)", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 18, title: "WebSocket Chat Server", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 19, title: "Load Balancer (round-robin, health checks)", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 20, title: "REST API Micro-Framework", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 21, title: "GraphQL Server", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 22, title: "MQTT Broker (pub-sub messaging)", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 23, title: "SOCKS5 Proxy Server", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 24, title: "SMTP Mail Server", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 25, title: "OAuth 2.0 / OpenID Connect Provider", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 26, title: "API Gateway (rate limiting, routing, auth)", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 27, title: "Content Delivery Network (edge caching)", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 28, title: "Torrent Client (CLI or GUI)", cat: "Web & Networking", diff: "Hard", src: "v4" },
  { id: 29, title: "Booru Client", cat: "Web & Networking", diff: "Hard", src: "v4" },
  { id: 30, title: "Chan Aggregator (multi-board viewer)", cat: "Web & Networking", diff: "Hard", src: "v4" },
  { id: 31, title: "Real-time Collaborative Editor (CRDT/OT)", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 32, title: "Web Browser Rendering Engine (layout + CSS)", cat: "Web & Networking", diff: "Expert", src: "New" },

  // 2. Systems & Infrastructure (33-57)
  { id: 33, title: "Display MBR Contents", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 34, title: "Elastic Producer/Consumer Task Queue", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 35, title: "Simple Version Control System", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 36, title: "Terminal Shell (pipes, redirection, history)", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 37, title: "Virtual Machine (bytecode, Hello World)", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 38, title: "Window Manager (tiling/floating, X11/Wayland)", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 39, title: "UART Game in Assembly", cat: "Systems & Infrastructure", diff: "Medium", src: "v4" },
  { id: 40, title: "Resource Monitor (htop-like)", cat: "Systems & Infrastructure", diff: "Medium", src: "New" },
  { id: 41, title: "Packet Sniffer (tcpdump-like)", cat: "Systems & Infrastructure", diff: "Medium", src: "New" },
  { id: 42, title: "System Call Tracer (strace-like)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 43, title: "Pong in UEFI (color graphics)", cat: "Systems & Infrastructure", diff: "Hard", src: "v4" },
  { id: 44, title: "FUSE Filesystem (mount custom FS)", cat: "Systems & Infrastructure", diff: "Hard", src: "v4" },
  { id: 45, title: "Memory Allocator (malloc/free)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 46, title: "Linux Container from Scratch (namespaces + cgroups)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 47, title: "Docker-like Container Runtime", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 48, title: "Device Driver (kernel module, chardev)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 49, title: "Text Editor with Autosave (data in filename)", cat: "Systems & Infrastructure", diff: "Hard", src: "v4" },
  { id: 50, title: "Bootloader (extended filesystem support)", cat: "Systems & Infrastructure", diff: "Expert", src: "v4" },
  { id: 51, title: "Operating System Kernel (x86_64, interrupts, paging)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 52, title: "File System (ext2-like, directories, inodes)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 53, title: "Process Scheduler (O(1) or CFS-like)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 54, title: "Container Orchestrator (Kubernetes-lite)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 55, title: "Init System (PID 1, service management)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 56, title: "Distributed Lock Service (etcd/Consul-like)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 57, title: "RAFT Consensus Algorithm", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },

  // 3. Data & Storage (58-82)
  { id: 58, title: "Password Manager (encrypted storage)", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 59, title: "LSB Steganography (hide data in images)", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 60, title: "Matrix Arithmetic Library", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 61, title: "File Compression Utility (Huffman/LZW)", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 62, title: "Bismuth Fractal Generator", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 63, title: "Seam Carving (content-aware resize)", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 64, title: "Bayesian Filter (spam classifier)", cat: "Data & Storage", diff: "Medium", src: "v4" },
  { id: 65, title: "CSV Parser (RFC 4180, with escaping)", cat: "Data & Storage", diff: "Easy", src: "New" },
  { id: 66, title: "JSON Parser from Scratch", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 67, title: "Bloom Filter (probabilistic set membership)", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 68, title: "In-Memory KV Store (Redis-like, RDB/AOF)", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 69, title: "B-Tree Implementation (disk-backed)", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 70, title: "Full-Text Search Engine (inverted index, TF-IDF)", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 71, title: "Vector Embedding Service (cosine search)", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 72, title: "Recommendation Engine (collaborative filtering)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 73, title: "Time Series Database (downsampling, retention)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 74, title: "Graph Database (property graph, Cypher-like)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 75, title: "Object Storage (S3-like: buckets, versioning)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 76, title: "Data Pipeline / ETL Engine", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 77, title: "Relational Database (SQL, relationships, indexes)", cat: "Data & Storage", diff: "Expert", src: "v4" },
  { id: 78, title: "SQLite from Scratch (SQL parser + B-Tree + executor)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 79, title: "LSM-Tree Storage Engine (LevelDB/RocksDB style)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 80, title: "Columnar Storage Format (Parquet-like)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 81, title: "Distributed KV Store (Dynamo-style)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 82, title: "CRDT Data Types (conflict-free replicated types)", cat: "Data & Storage", diff: "Expert", src: "New" },

  // 4. AI & Machine Learning (83-107)
  { id: 83, title: "Simulate Individual Neurons (basic NN)", cat: "AI & Machine Learning", diff: "Easy", src: "v4" },
  { id: 84, title: "Curses Text Editor (Emacs/Vim keybindings)", cat: "AI & Machine Learning", diff: "Medium", src: "v4" },
  { id: 85, title: "AI for Roguelikes (pathfinding, decisions)", cat: "AI & Machine Learning", diff: "Medium", src: "v4" },
  { id: 86, title: "Sudoku/n-Puzzle Solver (A* algorithm)", cat: "AI & Machine Learning", diff: "Medium", src: "v4" },
  { id: 87, title: "Connect-4 AI (Alpha-Beta pruning)", cat: "AI & Machine Learning", diff: "Medium", src: "v4" },
  { id: 88, title: "Feed-Forward Neural Network (matrix-based, backprop)", cat: "AI & Machine Learning", diff: "Medium", src: "v4" },
  { id: 89, title: "CNN for MNIST (using TensorFlow/Theano)", cat: "AI & Machine Learning", diff: "Medium", src: "v4" },
  { id: 90, title: "OpenAI Gym Reinforcement Learning Agent", cat: "AI & Machine Learning", diff: "Hard", src: "v4" },
  { id: 91, title: "CNN from Scratch (no frameworks, MNIST)", cat: "AI & Machine Learning", diff: "Hard", src: "v4" },
  { id: 92, title: "Decision Tree / Random Forest (from scratch)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 93, title: "Image Classifier (CIFAR-10 or similar)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 94, title: "Anomaly Detection (time series / logs)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 95, title: "Face Detection (Viola-Jones or CNN)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 96, title: "Object Detection (YOLO-like)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 97, title: "Speech Recognition (audio to text)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 98, title: "Text-to-Speech System", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 99, title: "Neural Machine Translation (seq2seq + attention)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 100, title: "Reinforcement Learning Agent (DQN/PPO)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 101, title: "Retrieval-Augmented Generation (RAG) System", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 102, title: "Recommendation System (matrix factorization)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 103, title: "Generative Adversarial Network (GAN)", cat: "AI & Machine Learning", diff: "Expert", src: "New" },
  { id: 104, title: "Diffusion Model for Image Generation", cat: "AI & Machine Learning", diff: "Expert", src: "New" },
  { id: 105, title: "Large Language Model (GPT-style transformer)", cat: "AI & Machine Learning", diff: "Expert", src: "New" },
  { id: 106, title: "Neural Network from First Principles (autograd engine)", cat: "AI & Machine Learning", diff: "Expert", src: "New" },
  { id: 107, title: "K-Means Clustering (unsupervised learning)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },

  // 5. Languages & Compilers (108-133)
  { id: 108, title: "Fizzbuzz (bonus: in assembly)", cat: "Languages & Compilers", diff: "Easy", src: "v4" },
  { id: 109, title: "RPN Calculator", cat: "Languages & Compilers", diff: "Easy", src: "v4" },
  { id: 110, title: "Count Character Occurrences (Unicode support)", cat: "Languages & Compilers", diff: "Easy", src: "v4" },
  { id: 111, title: "Tower of Hanoi", cat: "Languages & Compilers", diff: "Easy", src: "v4" },
  { id: 112, title: "Markdown Parser (to HTML/ANSI)", cat: "Languages & Compilers", diff: "Easy", src: "New" },
  { id: 113, title: "Radix Base Converter", cat: "Languages & Compilers", diff: "Medium", src: "v4" },
  { id: 114, title: "Write an Interpreted LISP-like Language", cat: "Languages & Compilers", diff: "Medium", src: "v4" },
  { id: 115, title: "HTML + JavaScript Debugger (breakpoints, step-through)", cat: "Languages & Compilers", diff: "Medium", src: "v4" },
  { id: 116, title: "Template Engine (Mustache-like: vars, loops, conditionals)", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 117, title: "CSS Parser (selectors, cascade, specificity)", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 118, title: "Lexer / Tokenizer for a Programming Language", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 119, title: "Parser Combinator Library", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 120, title: "Linter / Code Formatter (AST-based)", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 121, title: "REPL using a Compiled Language", cat: "Languages & Compilers", diff: "Hard", src: "v4" },
  { id: 122, title: "Design an Esoteric Language", cat: "Languages & Compilers", diff: "Hard", src: "v4" },
  { id: 123, title: "Turing Machine Simulator", cat: "Languages & Compilers", diff: "Hard", src: "v4" },
  { id: 124, title: "LISP Interpreter (S-expressions, macros)", cat: "Languages & Compilers", diff: "Hard", src: "v4" },
  { id: 125, title: "Regex Engine (NFA/DFA-based)", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 126, title: "Bytecode Interpreter (stack-based VM)", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 127, title: "Package Manager (dependency resolution, build)", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 128, title: "Unicode Converter (UTF-8, 16LE, 32LE, 32BE)", cat: "Languages & Compilers", diff: "Medium", src: "v4" },
  { id: 129, title: "C Compiler (to x86_64 or ARM assembly)", cat: "Languages & Compilers", diff: "Expert", src: "v4" },
  { id: 130, title: "Garbage Collector (mark-sweep or copying)", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 131, title: "TypeScript-to-JS Transpiler (type checking, emit)", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 132, title: "JIT Compiler (x86 code generation at runtime)", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 133, title: "WebAssembly Runtime (load, validate, execute .wasm)", cat: "Languages & Compilers", diff: "Expert", src: "New" },

  // 6. Graphics & Rendering (134-159)
  { id: 134, title: "Image to ASCII Art", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 135, title: "HSV Color Representation (color picker)", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 136, title: "Generate Complimentary Color", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 137, title: "Spinning 3D Cube (software-rendered)", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 138, title: "Cellular Textures (automata-based)", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 139, title: "Old School Demo Effect (plasma, tunnel, scrollers)", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 140, title: "Sierpinski Triangle (recursive/chaos game)", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 141, title: "Ulam Spiral (prime number visualization)", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 142, title: "ASCII Digital Clock", cat: "Graphics & Rendering", diff: "Easy", src: "v4" },
  { id: 143, title: "Pixel Editor (draw, save to image format)", cat: "Graphics & Rendering", diff: "Medium", src: "v4" },
  { id: 144, title: "Music Visualizer (bars, waveforms)", cat: "Graphics & Rendering", diff: "Medium", src: "v4" },
  { id: 145, title: "Generate 5-Color Scheme from Image", cat: "Graphics & Rendering", diff: "Medium", src: "v4" },
  { id: 146, title: "64KB Audio/Visual Demo", cat: "Graphics & Rendering", diff: "Medium", src: "v4" },
  { id: 147, title: "Image Converter (format conversion)", cat: "Graphics & Rendering", diff: "Medium", src: "v4" },
  { id: 148, title: "Fractal Explorer (Mandelbrot/Julia zoom)", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 149, title: "SVG Renderer (parse and render paths)", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 150, title: "Particle System (interactive physics)", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 151, title: "GIF Creator/Editor (create from frames)", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 152, title: "Double Pendulum Simulation (Lagrangian mechanics)", cat: "Graphics & Rendering", diff: "Medium", src: "v4" },
  { id: 153, title: "Constructive Solid Geometry (boolean 3D ops)", cat: "Graphics & Rendering", diff: "Hard", src: "v4" },
  { id: 154, title: "N-Body Simulation (gravitational, particle merging)", cat: "Graphics & Rendering", diff: "Hard", src: "v4" },
  { id: 155, title: "Ray Tracer (spheres, lighting, shadows, reflections)", cat: "Graphics & Rendering", diff: "Hard", src: "v4" },
  { id: 156, title: "Real-time FFT Spectrum Visualizer", cat: "Graphics & Rendering", diff: "Hard", src: "v4" },
  { id: 157, title: "3D Software Renderer (rasterization pipeline)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 158, title: "Voxel Engine (Minecraft-like block rendering)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 159, title: "PDF Renderer (parse and render documents)", cat: "Graphics & Rendering", diff: "Expert", src: "New" },

  // 7. Game Development (160-192)
  { id: 160, title: "Rock Paper Scissors", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 161, title: "Simon (memory pattern game)", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 162, title: "Snake", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 163, title: "Connect Four", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 164, title: "Yahtzee", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 165, title: "Oil Panic", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 166, title: "Game Engine in Unity", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 167, title: "PDF Tagger", cat: "Game Development", diff: "Easy", src: "v4" },
  { id: 168, title: "Flappy Bird Clone", cat: "Game Development", diff: "Easy", src: "New" },
  { id: 169, title: "Knight's Tour", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 170, title: "Tetris", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 171, title: "Pipe Dreams", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 172, title: "Pac-Man (different ghost behaviors)", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 173, title: "Minesweeper", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 174, title: "Sudoku (generator + solver)", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 175, title: "Shuffle a Deck of Cards (visualization)", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 176, title: "Multi-Agent Tag Simulation", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 177, title: "Scorched Earth Clone (artillery, wind, terrain)", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 178, title: "Chess (full rules)", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 179, title: "Mastermind", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 180, title: "Missile Command", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 181, title: "Tron Light Cycle", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 182, title: "Breakout", cat: "Game Development", diff: "Medium", src: "v4" },
  { id: 183, title: "Platformer Game Engine (tiles, gravity, enemies)", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 184, title: "Monster Raising/Breeding Simulator", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 185, title: "RPG Engine (Dragon Quest-like)", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 186, title: "First-Person Engine (OpenGL, walking, looking)", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 187, title: "Wolfenstein 3D Clone (ray-cast FPS)", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 188, title: "Danmaku (Bullet Hell) Engine", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 189, title: "Roguelike Engine / Dungeon Generator", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 190, title: "Go (board game, no AI needed)", cat: "Game Development", diff: "Hard", src: "v4" },
  { id: 191, title: "Physics Engine (rigid bodies, collision, constraints)", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 192, title: "Chip-8 Emulator (cached interpreter + games)", cat: "Game Development", diff: "Medium", src: "v4" },

  // 8. Security & Cryptography (193-212)
  { id: 193, title: "ROT 13", cat: "Security & Cryptography", diff: "Easy", src: "v4" },
  { id: 194, title: "Caesar Cipher Cracker (brute-force + freq analysis)", cat: "Security & Cryptography", diff: "Easy", src: "v4" },
  { id: 195, title: "Password Generator (configurable options)", cat: "Security & Cryptography", diff: "Easy", src: "v4" },
  { id: 196, title: "Classical Cipher Implementation (from rumkin.com)", cat: "Security & Cryptography", diff: "Easy", src: "v4" },
  { id: 197, title: "Text to Hex/Binary Converter", cat: "Security & Cryptography", diff: "Easy", src: "v4" },
  { id: 198, title: "Vigenere Cipher (encryption/decryption)", cat: "Security & Cryptography", diff: "Medium", src: "v4" },
  { id: 199, title: "Encrypt File and Upload Online", cat: "Security & Cryptography", diff: "Medium", src: "v4" },
  { id: 200, title: "ID3 Reader (read/edit MP3 metadata tags)", cat: "Security & Cryptography", diff: "Medium", src: "v4" },
  { id: 201, title: "Hash Function (SHA-256 from scratch)", cat: "Security & Cryptography", diff: "Medium", src: "New" },
  { id: 202, title: "AES Encryption (AES-128/256 from scratch)", cat: "Security & Cryptography", diff: "Medium", src: "New" },
  { id: 203, title: "TOTP / 2FA App (Google Authenticator-like)", cat: "Security & Cryptography", diff: "Medium", src: "New" },
  { id: 204, title: "JWT Library (encode, decode, verify)", cat: "Security & Cryptography", diff: "Medium", src: "New" },
  { id: 205, title: "Markdown (HTML/XML) Editor", cat: "Security & Cryptography", diff: "Medium", src: "v4" },
  { id: 206, title: "RSA from Scratch (keygen, encrypt, sign)", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 207, title: "Certificate Authority (issue X.509 certs)", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 208, title: "Encrypted Messaging (Signal-like, E2E encryption)", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 209, title: "Key Press Bot / Automation Tool", cat: "Security & Cryptography", diff: "Medium", src: "v4" },
  { id: 210, title: "TLS 1.3 Handshake (minimal implementation)", cat: "Security & Cryptography", diff: "Expert", src: "New" },
  { id: 211, title: "VPN Server (TUN/TAP, packet encryption)", cat: "Security & Cryptography", diff: "Expert", src: "New" },
  { id: 212, title: "Tor-like Anonymity Network (onion routing)", cat: "Security & Cryptography", diff: "Expert", src: "New" },

  // 9. Algorithms & Mathematics (213-237)
  { id: 213, title: "Calculate First n Digits of Pi (BBP/Machin)", cat: "Algorithms & Mathematics", diff: "Easy", src: "v4" },
  { id: 214, title: "Highest Prime Factor Calculator", cat: "Algorithms & Mathematics", diff: "Easy", src: "v4" },
  { id: 215, title: "Dot and Cross Product of Vectors", cat: "Algorithms & Mathematics", diff: "Easy", src: "v4" },
  { id: 216, title: "Eulerian Path (use every edge once)", cat: "Algorithms & Mathematics", diff: "Easy", src: "v4" },
  { id: 217, title: "Stock Max Profit (optimal buy/sell window)", cat: "Algorithms & Mathematics", diff: "Easy", src: "v4" },
  { id: 218, title: "Random Name Picker (weighted selection)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 219, title: "Least Squares Fitting (linear regression)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 220, title: "Game of Life (cellular automaton, pattern editor)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 221, title: "Dijkstra's Algorithm (shortest path)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 222, title: "First 1k Digits of Pi (spigot algorithm)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 223, title: "Mandelbrot Set (escape-time fractal)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 224, title: "Bellman-Ford Simulation (5+ vertices)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 225, title: "Nonogram Generator + Solver", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 226, title: "A* Pathfinding (heuristic search, grid)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 227, title: "C++ IDE Plugin (Clang AST autocomplete for Sublime/Atom)", cat: "Algorithms & Mathematics", diff: "Medium", src: "v4" },
  { id: 228, title: "Bloom Filter (probabilistic membership)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 229, title: "Quadtree / Octree (spatial partitioning)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 230, title: "Convex Hull (Graham Scan)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 231, title: "Hash Table from Scratch (open addressing)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 232, title: "Fast Fourier Transform (Cooley-Tukey)", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 233, title: "Simplex Algorithm (linear programming)", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 234, title: "Persistent Data Structures (immutable, versioned)", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 235, title: "WMS Map Viewer (non-web-based)", cat: "Algorithms & Mathematics", diff: "Hard", src: "v4" },
  { id: 236, title: "Lambert's Problem Solver (orbital mechanics)", cat: "Algorithms & Mathematics", diff: "Expert", src: "v4" },
  { id: 237, title: "SAT Solver (DPLL algorithm)", cat: "Algorithms & Mathematics", diff: "Expert", src: "New" },

  // 10. Practical Tools & Applications (238-250)
  { id: 238, title: "Markov Chain Sentence Generator", cat: "Practical Tools & Apps", diff: "Easy", src: "v4" },
  { id: 239, title: "To-Do List Application (web app or CLI)", cat: "Practical Tools & Apps", diff: "Easy", src: "v4" },
  { id: 240, title: "Chatbot (conversation retention)", cat: "Practical Tools & Apps", diff: "Easy", src: "v4" },
  { id: 241, title: "Paint Clone (drawing tools, save/load images)", cat: "Practical Tools & Apps", diff: "Medium", src: "v4" },
  { id: 242, title: "Graphic Calculator (plot functions, derivatives bonus)", cat: "Practical Tools & Apps", diff: "Medium", src: "v4" },
  { id: 243, title: "MIDI Player + Editor (play, edit, compose)", cat: "Practical Tools & Apps", diff: "Medium", src: "v4" },
  { id: 244, title: "English Sentence Parser (context analysis)", cat: "Practical Tools & Apps", diff: "Medium", src: "v4" },
  { id: 245, title: "Parametric/Graphic Equalizer (.wav files)", cat: "Practical Tools & Apps", diff: "Hard", src: "v4" },
  { id: 246, title: "Verlet Integration (cloth simulation)", cat: "Practical Tools & Apps", diff: "Hard", src: "v4" },
  { id: 247, title: "Sound Synthesis (sine, square, sawtooth, etc.)", cat: "Practical Tools & Apps", diff: "Hard", src: "v4" },
  { id: 248, title: "Music Streaming Server", cat: "Practical Tools & Apps", diff: "Hard", src: "v4" },
  { id: 249, title: "Shazam-like Audio Fingerprinting", cat: "Practical Tools & Apps", diff: "Hard", src: "v4" },
  { id: 250, title: "TI-86 Graphing Calculator Emulator", cat: "Practical Tools & Apps", diff: "Hard", src: "v4" },
];

// --- Volume 2: Challenges 251-500 ---
const challenges2 = [
  // 1. Web & Networking (251-266)
  { id: 251, title: "HTTP/3 (QUIC) Client", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 252, title: "Server-Sent Events (SSE) Push Server", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 253, title: "WebRTC Data Channel File Sharing", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 254, title: "REST API Client Library", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 255, title: "OpenAPI / Swagger Spec Parser", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 256, title: "Webhook Receiver & Dispatcher Service", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 257, title: "Rate Limiter (Token Bucket / Leaky Bucket)", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 258, title: "Circuit Breaker Pattern Library", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 259, title: "Service Discovery Registry (Consul-like)", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 260, title: "Distributed Tracing System (Jaeger-like)", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 261, title: "Web Push Notification Service", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 262, title: "Long-Polling Chat Server", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 263, title: "CQRS / Event Sourcing Framework", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 264, title: "Health Check & Status Dashboard", cat: "Web & Networking", diff: "Medium", src: "New" },
  { id: 265, title: "HTTP Proxy with Caching (Squid-like)", cat: "Web & Networking", diff: "Hard", src: "New" },
  { id: 266, title: "IPFS-like Distributed File System Node", cat: "Web & Networking", diff: "Expert", src: "New" },

  // 2. Systems & Infrastructure (267-282)
  { id: 267, title: "eBPF Program (packet filter / tracing)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 268, title: "Unikernel (single-address-space OS image)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 269, title: "Simple Type-2 Hypervisor", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 270, title: "Network Filesystem (NFS-like)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 271, title: "RAM Disk Driver", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 272, title: "/proc Filesystem Implementation", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 273, title: "Kernel Module for GPIO Control", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 274, title: "KVM-based Lightweight Emulator", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 275, title: "NUMA-Aware Memory Allocator", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 276, title: "ACPI Driver (power management basics)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 277, title: "Interrupt Controller (PIC/APIC simulation)", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 278, title: "PCI Device Driver", cat: "Systems & Infrastructure", diff: "Expert", src: "New" },
  { id: 279, title: "Scheduler Visualization Tool", cat: "Systems & Infrastructure", diff: "Medium", src: "New" },
  { id: 280, title: "Core Dump Analyzer", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 281, title: "Performance Counter Monitor (perf-like)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },
  { id: 282, title: "User-Space Network Stack (netmap-like)", cat: "Systems & Infrastructure", diff: "Hard", src: "New" },

  // 3. Data & Storage (283-298)
  { id: 283, title: "Triplestore (RDF/SPARQL Database)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 284, title: "Document Store (MongoDB-like)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 285, title: "Wide-Column Store (Cassandra-like)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 286, title: "In-Memory Data Grid (Hazelcast-like)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 287, title: "Streaming Database (Materialize-like)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 288, title: "Change Data Capture (CDC) System", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 289, title: "Database Migration Tool", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 290, title: "ORM (Object-Relational Mapper) from Scratch", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 291, title: "Query Optimizer / Query Planner", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 292, title: "Multi-Version Concurrency Control (MVCC)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 293, title: "Write-Ahead Log (WAL) Implementation", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 294, title: "Distributed Transaction Coordinator (2PC)", cat: "Data & Storage", diff: "Expert", src: "New" },
  { id: 295, title: "Sharded Counter Service", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 296, title: "HyperLogLog (cardinality estimation)", cat: "Data & Storage", diff: "Medium", src: "New" },
  { id: 297, title: "Geospatial Index (R-Tree / Quad-Tree)", cat: "Data & Storage", diff: "Hard", src: "New" },
  { id: 298, title: "Count-Min Sketch (frequency estimation)", cat: "Data & Storage", diff: "Medium", src: "New" },

  // 4. AI & Machine Learning (299-314)
  { id: 299, title: "Genetic Algorithm Framework", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 300, title: "Particle Swarm Optimization", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 301, title: "Bayesian Network / Belief Network", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 302, title: "Hidden Markov Model (HMM) from Scratch", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 303, title: "Word2Vec / GloVe Embeddings from Scratch", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 304, title: "Named Entity Recognition (NER) System", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 305, title: "Extractive Text Summarizer", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 306, title: "Question Answering System (BERT-style)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 307, title: "Document Clustering (HDBSCAN)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 308, title: "Isolation Forest (Anomaly Detection)", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 309, title: "Gaussian Mixture Model (GMM)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 310, title: "Principal Component Analysis (PCA) from Scratch", cat: "AI & Machine Learning", diff: "Medium", src: "New" },
  { id: 311, title: "t-SNE Dimensionality Reduction", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 312, title: "Gradient Boosting Machine (XGBoost-like)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 313, title: "Latent Dirichlet Allocation (Topic Modeling)", cat: "AI & Machine Learning", diff: "Hard", src: "New" },
  { id: 314, title: "Causal Inference / A/B Testing Framework", cat: "AI & Machine Learning", diff: "Hard", src: "New" },

  // 5. Languages & Compilers (315-330)
  { id: 315, title: "Forth Language Interpreter", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 316, title: "Prolog Inference Engine", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 317, title: "Smalltalk-like VM / Object System", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 318, title: "Brainfuck JIT Compiler", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 319, title: "Python Bytecode Disassembler", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 320, title: "SQL Parser (full grammar)", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 321, title: "YAML Parser from Scratch", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 322, title: "TOML Parser from Scratch", cat: "Languages & Compilers", diff: "Easy", src: "New" },
  { id: 323, title: "INI / Config File Parser", cat: "Languages & Compilers", diff: "Easy", src: "New" },
  { id: 324, title: "C Preprocessor (macros, includes, pragma)", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 325, title: "Source Map Generator (JS/CSS)", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 326, title: "Simple Decompiler (binary to pseudocode)", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 327, title: "Debug Symbol Reader (DWARF/PDB)", cat: "Languages & Compilers", diff: "Expert", src: "New" },
  { id: 328, title: "S-Expression Parser + Pretty Printer", cat: "Languages & Compilers", diff: "Medium", src: "New" },
  { id: 329, title: "PEG Parser Generator", cat: "Languages & Compilers", diff: "Hard", src: "New" },
  { id: 330, title: "Language Server Protocol (LSP) Implementation", cat: "Languages & Compilers", diff: "Hard", src: "New" },

  // 6. Graphics & Rendering (331-346)
  { id: 331, title: "GLTF/GLB 3D Model Loader", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 332, title: "Bezier Curve Editor", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 333, title: "Subdivision Surface Modeler (Catmull-Clark)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 334, title: "Marching Cubes (isosurface extraction)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 335, title: "Terrain Generation (Perlin Noise + Erosion)", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 336, title: "Fluid Simulation (SPH / PIC / FLIP)", cat: "Graphics & Rendering", diff: "Expert", src: "New" },
  { id: 337, title: "Cloth Simulation (Spring-Mass System)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 338, title: "Volumetric Cloud / Fog Rendering", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 339, title: "Global Illumination (Path Tracing)", cat: "Graphics & Rendering", diff: "Expert", src: "New" },
  { id: 340, title: "Shadow Mapping (Cascaded / PCF)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 341, title: "Screen-Space Reflections", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 342, title: "Post-Processing Pipeline (Bloom, DOF, Motion Blur)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 343, title: "GPU Compute Shader (particles / physics)", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 344, title: "Signed Distance Field (SDF) Renderer", cat: "Graphics & Rendering", diff: "Hard", src: "New" },
  { id: 345, title: "Color Quantization / Palette Extraction", cat: "Graphics & Rendering", diff: "Medium", src: "New" },
  { id: 346, title: "Procedural City / Building Generator", cat: "Graphics & Rendering", diff: "Hard", src: "New" },

  // 7. Game Development (347-362)
  { id: 347, title: "Visual Novel Engine (Ren'Py-like)", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 348, title: "Point-and-Click Adventure Engine", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 349, title: "Interactive Fiction / Text Parser (Zork-like)", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 350, title: "Sokoban / Puzzle Game Engine", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 351, title: "Rhythm Game (Guitar Hero / osu!-like)", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 352, title: "Top-Down Racing Game", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 353, title: "Fighting Game Engine (Street Fighter-like)", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 354, title: "Tower Defense Game", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 355, title: "City Builder / Tycoon Game", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 356, title: "Idle / Incremental Clicker Game", cat: "Game Development", diff: "Easy", src: "New" },
  { id: 357, title: "Battle Royale (simplified, AI opponents)", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 358, title: "Online Multiplayer Lobby + Matchmaking", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 359, title: "Collectible Card Game (Hearthstone-like)", cat: "Game Development", diff: "Hard", src: "New" },
  { id: 360, title: "Hidden Object Game", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 361, title: "Endless Runner (Temple Run-like)", cat: "Game Development", diff: "Medium", src: "New" },
  { id: 362, title: "Pinball Simulation", cat: "Game Development", diff: "Medium", src: "New" },

  // 8. Security & Cryptography (363-378)
  { id: 363, title: "Differential Privacy Library", cat: "Security & Cryptography", diff: "Expert", src: "New" },
  { id: 364, title: "Homomorphic Encryption (simple addition)", cat: "Security & Cryptography", diff: "Expert", src: "New" },
  { id: 365, title: "Shamir's Secret Sharing Scheme", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 366, title: "ECDSA Digital Signatures from Scratch", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 367, title: "Post-Quantum Cryptography Prototype (lattice)", cat: "Security & Cryptography", diff: "Expert", src: "New" },
  { id: 368, title: "Side-Channel Attack Demo (timing/power)", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 369, title: "Network Protocol Fuzzer (AFL-like)", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 370, title: "Seccomp-Based Application Sandbox", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 371, title: "Hardened Container Runtime (gVisor-like)", cat: "Security & Cryptography", diff: "Expert", src: "New" },
  { id: 372, title: "Credential Vault / Secrets Hub", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 373, title: "Secrets Rotation Service", cat: "Security & Cryptography", diff: "Medium", src: "New" },
  { id: 374, title: "Code Signing & Verification System", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 375, title: "GPG-like Encryption Tool", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 376, title: "Password Strength Estimator (zxcvbn-like)", cat: "Security & Cryptography", diff: "Medium", src: "New" },
  { id: 377, title: "Certificate Transparency Log Monitor", cat: "Security & Cryptography", diff: "Hard", src: "New" },
  { id: 378, title: "Web Application Firewall (WAF) Rules Engine", cat: "Security & Cryptography", diff: "Hard", src: "New" },

  // 9. Algorithms & Mathematics (379-395)
  { id: 379, title: "Hungarian Algorithm (assignment problem)", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 380, title: "Floyd-Warshall (all-pairs shortest path)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 381, title: "Edmonds-Karp / Dinic Max Flow", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 382, title: "Knuth-Morris-Pratt String Search", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 383, title: "Burrows-Wheeler Transform (BWT)", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 384, title: "Huffman Coding Visualizer", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 385, title: "L-System / Fractal Grammar Generator", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 386, title: "Voronoi Diagram / Fortune's Algorithm", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 387, title: "Delaunay Triangulation", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 388, title: "Barnes-Hut N-Body Approximation", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 389, title: "Strassen Matrix Multiplication", cat: "Algorithms & Mathematics", diff: "Hard", src: "New" },
  { id: 390, title: "Karatsuba Multiplication", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 391, title: "Miller-Rabin Primality Test", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 392, title: "Levenshtein / Damerau-Levenshtein Distance", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 393, title: "Longest Common Subsequence (LCS)", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },
  { id: 394, title: "Maximum Subarray (Kadane's Algorithm)", cat: "Algorithms & Mathematics", diff: "Easy", src: "New" },
  { id: 395, title: "Reservoir Sampling", cat: "Algorithms & Mathematics", diff: "Medium", src: "New" },

  // 10. Practical Tools & Apps (396-413)
  { id: 396, title: "Clipboard Manager (history, categories)", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 397, title: "Screen Recorder (video capture)", cat: "Practical Tools & Apps", diff: "Hard", src: "New" },
  { id: 398, title: "Screenshot Annotation Tool", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 399, title: "Window Switcher (Alt-Tab replacement)", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 400, title: "Instant File Search (Everything-like)", cat: "Practical Tools & Apps", diff: "Hard", src: "New" },
  { id: 401, title: "Disk Usage Analyzer (TreeMap view)", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 402, title: "Color Picker / Eyedropper (screen)", cat: "Practical Tools & Apps", diff: "Easy", src: "New" },
  { id: 403, title: "Font Preview & Manager", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 404, title: "Batch File Renamer", cat: "Practical Tools & Apps", diff: "Easy", src: "New" },
  { id: 405, title: "Duplicate File Finder", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 406, title: "Quick Launcher (Alfred / Spotlight-like)", cat: "Practical Tools & Apps", diff: "Hard", src: "New" },
  { id: 407, title: "Pomodoro Timer + Task Tracker", cat: "Practical Tools & Apps", diff: "Easy", src: "New" },
  { id: 408, title: "Habit Tracker with Streak Counting", cat: "Practical Tools & Apps", diff: "Easy", src: "New" },
  { id: 409, title: "Flashcard App (Anki-like, spaced repetition)", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 410, title: "Recipe Manager / Meal Planner", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },
  { id: 411, title: "Document Scanner (camera-based)", cat: "Practical Tools & Apps", diff: "Hard", src: "New" },
  { id: 412, title: "E-Book Reader (EPUB/MOBI)", cat: "Practical Tools & Apps", diff: "Hard", src: "New" },
  { id: 413, title: "Budget Tracker / Personal Finance", cat: "Practical Tools & Apps", diff: "Medium", src: "New" },

  // 11. Mobile & Desktop Development (414-433)
  { id: 414, title: "Cross-Platform Calculator App", cat: "Mobile & Desktop Development", diff: "Easy", src: "New" },
  { id: 415, title: "Weather App with Live Animations", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 416, title: "Expense / Budget Tracker", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 417, title: "Note-Taking App (sync, markdown)", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 418, title: "RSS / Feed Reader", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 419, title: "Podcast Player App", cat: "Mobile & Desktop Development", diff: "Hard", src: "New" },
  { id: 420, title: "Workout / Exercise Tracker", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 421, title: "Meditation / Focus Timer", cat: "Mobile & Desktop Development", diff: "Easy", src: "New" },
  { id: 422, title: "QR Code Scanner & Generator", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 423, title: "Music Player (playlists, search)", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 424, title: "Alarm Clock with Custom Ringtones", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 425, title: "Step Counter / Pedometer", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 426, title: "Drawing / Sketchpad App", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 427, title: "Unit Converter (comprehensive)", cat: "Mobile & Desktop Development", diff: "Easy", src: "New" },
  { id: 428, title: "Language Learning Flashcards", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 429, title: "Shopping List / Grocery App", cat: "Mobile & Desktop Development", diff: "Easy", src: "New" },
  { id: 430, title: "Calendar / Event Scheduler", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 431, title: "Compass / Level Tool", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 432, title: "Barcode Scanner (product lookup)", cat: "Mobile & Desktop Development", diff: "Medium", src: "New" },
  { id: 433, title: "Habit Tracker / Streak Counter", cat: "Mobile & Desktop Development", diff: "Easy", src: "New" },

  // 12. Blockchain & Web3 (434-448)
  { id: 434, title: "Smart Contract (Solidity) - Simple Storage", cat: "Blockchain & Web3", diff: "Medium", src: "New" },
  { id: 435, title: "Decentralized Exchange (Uniswap-like)", cat: "Blockchain & Web3", diff: "Expert", src: "New" },
  { id: 436, title: "NFT Minter & Marketplace", cat: "Blockchain & Web3", diff: "Hard", src: "New" },
  { id: 437, title: "DAO Governance / Voting System", cat: "Blockchain & Web3", diff: "Hard", src: "New" },
  { id: 438, title: "Merkle Tree (proof gen + verification)", cat: "Blockchain & Web3", diff: "Medium", src: "New" },
  { id: 439, title: "Zero-Knowledge Proof (simple zk-SNARK circuit)", cat: "Blockchain & Web3", diff: "Expert", src: "New" },
  { id: 440, title: "SPV Light Client (Bitcoin/Ethereum)", cat: "Blockchain & Web3", diff: "Expert", src: "New" },
  { id: 441, title: "HD Wallet (BIP32/39/44 mnemonic)", cat: "Blockchain & Web3", diff: "Hard", src: "New" },
  { id: 442, title: "ERC-20 Token from Scratch", cat: "Blockchain & Web3", diff: "Medium", src: "New" },
  { id: 443, title: "Staking / Yield Farming Simulator", cat: "Blockchain & Web3", diff: "Hard", src: "New" },
  { id: 444, title: "Block Explorer Web App", cat: "Blockchain & Web3", diff: "Medium", src: "New" },
  { id: 445, title: "Multi-Signature Wallet", cat: "Blockchain & Web3", diff: "Hard", src: "New" },
  { id: 446, title: "Oracle Price Feed Service", cat: "Blockchain & Web3", diff: "Hard", src: "New" },
  { id: 447, title: "Layer 2 Rollup (simple state channel)", cat: "Blockchain & Web3", diff: "Expert", src: "New" },
  { id: 448, title: "Cross-Chain Bridge Relay", cat: "Blockchain & Web3", diff: "Expert", src: "New" },

  // 13. DevOps & Cloud Infrastructure (449-463)
  { id: 449, title: "CI/CD Pipeline Engine (GitHub Actions-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 450, title: "Terraform Provider for Custom Service", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 451, title: "Configuration Management (Ansible-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 452, title: "Monitoring Dashboard (Grafana-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 453, title: "Log Aggregator (Loki / ELK-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 454, title: "Secret Management (Vault-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 455, title: "Feature Flag / Toggle Service", cat: "DevOps & Cloud Infrastructure", diff: "Medium", src: "New" },
  { id: 456, title: "Status Page / Uptime Monitor", cat: "DevOps & Cloud Infrastructure", diff: "Medium", src: "New" },
  { id: 457, title: "On-Call Schedule Manager (PagerDuty-like)", cat: "DevOps & Cloud Infrastructure", diff: "Medium", src: "New" },
  { id: 458, title: "Blue-Green Deployment Tool", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 459, title: "Canary Deployment Controller", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 460, title: "Artifact Repository (Docker Registry-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 461, title: "Service Mesh Proxy Sidecar (Envoy-like)", cat: "DevOps & Cloud Infrastructure", diff: "Expert", src: "New" },
  { id: 462, title: "Chaos Engineering Tool (Chaos Monkey)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },
  { id: 463, title: "Auto-Scaler (K8s HPA-like)", cat: "DevOps & Cloud Infrastructure", diff: "Hard", src: "New" },

  // 14. Data Science & Visualization (464-478)
  { id: 464, title: "Interactive Dashboard (Tableau-like)", cat: "Data Science & Visualization", diff: "Hard", src: "New" },
  { id: 465, title: "Choropleth Map Generator", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 466, title: "Network Graph Visualizer", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 467, title: "Sankey Diagram / Flow Chart Generator", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 468, title: "Violin / Box Plot Charting Library", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 469, title: "Heat Map / Correlation Matrix", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 470, title: "Parallel Coordinates Plot", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 471, title: "3D Surface / Contour Plot Renderer", cat: "Data Science & Visualization", diff: "Hard", src: "New" },
  { id: 472, title: "Animated Timeline / Gapminder Chart", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 473, title: "Word Cloud Generator", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 474, title: "Data Cleaning / Wrangling Pipeline", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 475, title: "Web Scraper to Structured Dataset", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 476, title: "Time Series Anomaly Visualizer", cat: "Data Science & Visualization", diff: "Hard", src: "New" },
  { id: 477, title: "Alluvial / River Plot Generator", cat: "Data Science & Visualization", diff: "Medium", src: "New" },
  { id: 478, title: "Radar / Spider Chart Generator", cat: "Data Science & Visualization", diff: "Medium", src: "New" },

  // 15. Audio & Music Technology (479-490)
  { id: 479, title: "DAW (Digital Audio Workstation) Lite", cat: "Audio & Music Technology", diff: "Expert", src: "New" },
  { id: 480, title: "Audio Editor (Audacity-like waveform editing)", cat: "Audio & Music Technology", diff: "Hard", src: "New" },
  { id: 481, title: "Drum Machine / Step Sequencer", cat: "Audio & Music Technology", diff: "Medium", src: "New" },
  { id: 482, title: "Granular Synthesizer", cat: "Audio & Music Technology", diff: "Hard", src: "New" },
  { id: 483, title: "Audio Looper / Phrase Sampler", cat: "Audio & Music Technology", diff: "Medium", src: "New" },
  { id: 484, title: "Auto-Tune / Pitch Correction", cat: "Audio & Music Technology", diff: "Hard", src: "New" },
  { id: 485, title: "Audio Effect Chain (reverb, delay, chorus)", cat: "Audio & Music Technology", diff: "Hard", src: "New" },
  { id: 486, title: "Metronome / Instrument Tuner", cat: "Audio & Music Technology", diff: "Medium", src: "New" },
  { id: 487, title: "Sheet Music Renderer (MIDI to notation)", cat: "Audio & Music Technology", diff: "Hard", src: "New" },
  { id: 488, title: "Chord Progression Analyzer", cat: "Audio & Music Technology", diff: "Medium", src: "New" },
  { id: 489, title: "Audio Stream Mixer (multi-track)", cat: "Audio & Music Technology", diff: "Hard", src: "New" },
  { id: 490, title: "Noise Gate / Compressor / Limiter", cat: "Audio & Music Technology", diff: "Medium", src: "New" },

  // 16. Embedded Systems & IoT (491-500)
  { id: 491, title: "LED Matrix Display Driver (text + animations)", cat: "Embedded Systems & IoT", diff: "Medium", src: "New" },
  { id: 492, title: "Temperature / Humidity Data Logger", cat: "Embedded Systems & IoT", diff: "Medium", src: "New" },
  { id: 493, title: "Smart Home Hub Controller", cat: "Embedded Systems & IoT", diff: "Hard", src: "New" },
  { id: 494, title: "ESP32 Web Server with REST API", cat: "Embedded Systems & IoT", diff: "Medium", src: "New" },
  { id: 495, title: "Handheld Game Console (Arduino)", cat: "Embedded Systems & IoT", diff: "Hard", src: "New" },
  { id: 496, title: "Drone Flight Controller (simulation)", cat: "Embedded Systems & IoT", diff: "Expert", src: "New" },
  { id: 497, title: "Motion-Activated Security Camera", cat: "Embedded Systems & IoT", diff: "Hard", src: "New" },
  { id: 498, title: "RFID / NFC Door Lock System", cat: "Embedded Systems & IoT", diff: "Hard", src: "New" },
  { id: 499, title: "Weather Station (sensors + live dashboard)", cat: "Embedded Systems & IoT", diff: "Medium", src: "New" },
  { id: 500, title: "Bluetooth LE Beacon Scanner", cat: "Embedded Systems & IoT", diff: "Hard", src: "New" },
];

const allChallenges = challenges.concat(challenges2);

// --- Categories config ---
const categories = [
  { key: "Web & Networking" },
  { key: "Systems & Infrastructure" },
  { key: "Data & Storage" },
  { key: "AI & Machine Learning" },
  { key: "Languages & Compilers" },
  { key: "Graphics & Rendering" },
  { key: "Game Development" },
  { key: "Security & Cryptography" },
  { key: "Algorithms & Mathematics" },
  { key: "Practical Tools & Apps" },
  { key: "Mobile & Desktop Development" },
  { key: "Blockchain & Web3" },
  { key: "DevOps & Cloud Infrastructure" },
  { key: "Data Science & Visualization" },
  { key: "Audio & Music Technology" },
  { key: "Embedded Systems & IoT" },
];

// --- DOM refs ---
const randomResult = document.getElementById("random-result");
const randomBtn = document.getElementById("random-btn");
const randomDiff = document.getElementById("random-difficulty");
const randomCat = document.getElementById("random-category");

const challengesTable = document.getElementById("challenges-table");
const searchInput = document.getElementById("search-input");
const filterCat = document.getElementById("filter-category");
const filterDiff = document.getElementById("filter-difficulty");
const filterSrc = document.getElementById("filter-source");
const visibleCount = document.getElementById("visible-count");
const totalCount = document.getElementById("total-count");

// --- Populate category selects ---
const catSelects = [randomCat, filterCat];
catSelects.forEach((sel) => {
  categories.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c.key;
    opt.textContent = c.key;
    sel.appendChild(opt);
  });
});

totalCount.textContent = allChallenges.length;

// --- Random picker ---
randomBtn.addEventListener("click", pickRandom);

function pickRandom() {
  const catFilter = randomCat.value;
  const diffFilter = randomDiff.value;

  let pool = allChallenges;
  if (catFilter !== "any") pool = pool.filter((c) => c.cat === catFilter);
  if (diffFilter !== "any") pool = pool.filter((c) => c.diff === diffFilter);

  if (pool.length === 0) {
    randomResult.innerHTML = `<span class="random-placeholder">No challenges match your filters!</span>`;
    randomResult.classList.remove("active", "spinning");
    return;
  }

  // Spinning animation
  randomResult.classList.add("spinning");
  randomResult.classList.remove("active");
  let spins = 0;
  const maxSpins = 8 + Math.floor(Math.random() * 6);
  const interval = setInterval(() => {
    const preview = pool[Math.floor(Math.random() * pool.length)];
    randomResult.innerHTML = renderChallengeDisplay(preview, true);
    spins++;
    if (spins >= maxSpins) {
      clearInterval(interval);
      const pick = pool[Math.floor(Math.random() * pool.length)];
      randomResult.innerHTML = renderChallengeDisplay(pick, false);
      randomResult.classList.remove("spinning");
      randomResult.classList.add("active");
    }
  }, 70 + spins * 8);
}

function renderChallengeDisplay(c, preview) {
  const opacity = preview ? "0.4" : "1";
  return `<div class="random-display" style="opacity:${opacity}">
    <div class="rd-id">#${c.id}</div>
    <div class="rd-title">${c.title}</div>
    <div class="rd-meta">
      <span class="rd-cat">${c.cat}</span>
      <span class="rd-diff diff-${c.diff}">${c.diff}</span>
      <span class="rd-cat">${c.src}</span>
    </div>
  </div>`;
}

// --- Browse table ---
function renderTable() {
  const cat = filterCat.value;
  const diff = filterDiff.value;
  const src = filterSrc.value;
  const query = searchInput.value.toLowerCase().trim();

  const filtered = allChallenges.filter((c) => {
    if (cat !== "all" && c.cat !== cat) return false;
    if (diff !== "all" && c.diff !== diff) return false;
    if (src !== "all" && c.src !== src) return false;
    if (query && !c.title.toLowerCase().includes(query) && !c.cat.toLowerCase().includes(query)) return false;
    return true;
  });

  visibleCount.textContent = filtered.length;

  challengesTable.innerHTML = "";
  filtered.forEach((c) => {
    const row = document.createElement("div");
    row.className = "challenge-row";
    row.innerHTML = `
      <span class="cr-id">#${c.id}</span>
      <span class="cr-title">${c.title}</span>
      <span class="cr-cat">${c.cat}</span>
      <span class="rd-diff diff-${c.diff}">${c.diff}</span>
      <span class="cr-source source-${c.src}">${c.src}</span>
    `;
    challengesTable.appendChild(row);
  });
}

searchInput.addEventListener("input", renderTable);
filterCat.addEventListener("change", renderTable);
filterDiff.addEventListener("change", renderTable);
filterSrc.addEventListener("change", renderTable);

// Initial render
renderTable();
