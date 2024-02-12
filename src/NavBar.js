import './App.css';

function NavBar() {
  return (
    <nav class="bg-transparent">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center rounded">
            <div>
                <span><span className="text-2xl font-bold text-gray-800 mb-4">React</span><span className='text-2xl font-regular text-gray-800 mb-4'>Class</span></span>
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#home" class="text-gray-800 hover:text-gray-600 font-semibold">Home</a>
                <a href="#about" class="text-gray-800 hover:text-gray-600 font-semibold">About</a>
                <a href="#blog" class="text-gray-800 hover:text-gray-600 font-semibold">Blog</a>
                <a href="#contact" class="text-gray-800 hover:text-gray-600 font-semibold">Contact</a>
            </div>
            <div class="md:hidden">
                <button class="text-gray-800 hover:text-gray-600 focus:outline-none">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
                        <path fill-rule="evenodd"
                            d="M2 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zM3 10a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H3zm-1 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
