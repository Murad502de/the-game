import { useEffect, useRef } from "react";

const Test = () => {

    const container = useRef();

    useEffect(() => {
        if(container.current) {
            container.current.addEventListener('wheel', (event) => {
                event.preventDefault();
                container.current.scrollLeft += event.deltaY;
            })
        }
    }, [])
    return (
        <main ref={container}>
            <section>
                <h1>Beep</h1>
            </section>
        </main>
    )
}

export default Test;