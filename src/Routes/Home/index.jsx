import './index.css';

const Home = () => {
    const backgrounImageStyles = {
        backgroundImage: `url(${'https://martinvorel.com/wp-content/uploads/2018/12/minimalist-landscape-winter-vineyard-.jpg'})`
    };

    return (
        <>
            <main className='home-page'>
                <img className='background-image' style={backgrounImageStyles}/>
            </main>
        </>
    )
}

export default Home;