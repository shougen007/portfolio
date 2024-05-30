import Link from 'next/link';
export default function PageNotFound(){
   
    return(
        <div className="flex justify-center">
            <h1>404 Not found!</h1>
            <Link href="/">
                <a>[Go back to Home]</a>
            </Link>
        </div>

    );
}
