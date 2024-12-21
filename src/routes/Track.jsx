import Header from '../components/Header'
import Container from '../components/Container'
import Map from '../components/Map'
const Track = () => {
    return (
        <>
            <Header />
            <Container>
                <div className='w-full h-[550px]'>
                    <Map />
                </div>
            </Container>
        </>
    )
}

export default Track
