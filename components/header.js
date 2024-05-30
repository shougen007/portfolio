import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header(){
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="ml-3 text-xl">Portfolio</span>
                        </a>
                    </Link>


                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">ホーム</a>
                        </Link>

                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">プロジェクト</a>
                        </Link>

                        <a href="https://line.me/ti/g2/201sLvfP0OG399r3YX2mBIqNTXrXMrVYh9JZMg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" className="mr-5 hover:text-gray-900">お問い合わせ</a>
                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    );
}
