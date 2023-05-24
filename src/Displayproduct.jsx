function Displayproduct()
{
    let tshirt = {
        brand:"puma", price:2000,
        img:"https://rukminim1.flixcart.com/image/612/612/ktd9mkw0/t-shirt/w/l/x/m-67029605-puma-original-imag6q3apddpmxjh.jpeg?q=70"};


        return(
            <div className="product">
                <img src={tshirt.img} />
                <h1>{tshirt.brand}</h1>
                <h1>{tshirt.price}</h1>
            </div>
        )
}
export default Displayproduct