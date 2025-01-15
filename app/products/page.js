
export default async function Products() {
    
    // async, await = 비동기 작업을 동기 작업처럼 작성할 수 있도록 도와줌 
    // async = 비동기 함수 정의, 항상 Promise를 반환, promise= 콜백 지옥 문제 해결(작업의 성공, 실패를 나타냄)
    // await = promise가 해결되기 전까지 대기, async 내부에서만 사용 가능

    const getProducts = async () => {
        const res = await fetch('http://localhost:3000/api/')
        return res.json()
    }

    const data = await getProducts()

    return (
        <>

        <h1>Products</h1>
        <ul className="grid grid-cols-4 gap-4 items-center">
            {
                data.products.map( (item, index) => (
                    <li className="w-52 mx-4" key={index}>
                        <img src={item.thumbnail} alt={item.title} />
                        <div className="p-2 text-sm text-black bg-gray-400">
                            {item.title} <span className="rounded-lg p-1 px-1 ml-2 bg-gray-200">{item.price}</span>
                        </div>
                    </li>
                ))
            }
        </ul>
        
        </>
    )
}