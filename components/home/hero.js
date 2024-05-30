import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Saloo~
                <br className="hidden lg:inline-block"/>
                {/* 2024年, 生まれました。 */}
            </h1>
            <p className="mb-8 leading-relaxed">
            私たちはさまざまな課題を解決することで、世の中をより良い方向へと変えていくお手伝いをしたいと考えています。
            Salooのサービスがみなさまの日々に自然に寄り添い、驚きや感動を生み出し続けることができたら、これほどうれしいことはない、と思いを新たにしています。
            いつもあなたと共に。
            </p>
            <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        プロジェクトを見る
                    </a>
                </Link>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
