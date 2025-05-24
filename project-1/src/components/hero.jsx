import bodyimage from '../assets/bodyimage.png'
import design from '../assets/design.png'
import rabbitimage from '../assets/rabbit.png'
import leaf from '../assets/leaf.png'
import ecofriendly from '../assets/eco-friendly.png'

const Herosection = () => {
    return (
        <main className='hero'>
            <div className='herocontent'>

                <p className="maincontain">
                    Nourish Your Skin,
                    Radiate Confidence
                </p>
                <p className='bodydescription'>
                    Our carefully crafted skincare products are formulated with the finest natural ingredients to address your unique skin concerns.
                </p>
                <div className='bodyimage'>
                    <img src={bodyimage} alt="skinnproduct" /></div>
            </div>
            <div className='design'>
                <img src={design} alt="design" />
            </div>
            <div>
                <button >SHOP NOW</button>
            </div>
            <p className='floatingcontent'>WHY US?</p>
            <div className='advatages'>
                <div className='leaf'>
                    <img src={leaf} alt="leaf" />
                    <p>Natural Ingredients</p>
                </div>
                <div className='rabbitimage'>
                    <img src={rabbitimage} alt="rabbit" />
                    <p>Cruelty Free</p>
                </div>
                <div className='eco'>
                    <img src={ecofriendly} alt="ecofriedly" />
                    <p>Eco-friendly Packagaing</p>
                </div>

            </div>
        </main>
    );
}
export default Herosection