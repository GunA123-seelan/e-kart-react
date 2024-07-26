import React, { useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TruncateTitle from './TruncateTitle';
import SearchCategory from '../SearchItem/SearchCategory';
// import { FaRegHeart } from "react-icons/fa";
// import Favourite from '../Favourite/Favourite';
const Products = ({favArr,setFavArr}) => {
    const[product,setProduct]=useState();
    const[search,setSearch]=useState();
    // const[myProduct,setMyProduct]=useState();
    // const[favArr,setFavArr]=useState([]);
    useEffect(()=>{
        console.log("works");
        fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>{
            setProduct(res)
            setSearch(res);
        }
      
    );
    },[])
    // console.log("prodct",product);
    const handleSearch=(item)=>{
        console.log("product",product,item);
        const res = product.filter((pl)=>pl.category === item);
        console.log("res",res);
        setSearch(res);
    }
    const favItem=(id)=>{
        console.log(id);

        const favItem = product.find((fItem)=>fItem.id === id);

        const isFav = favArr.some((item)=>item.id === id);

        if(!isFav){
            const myArr=[...favArr,{...favItem,fav:true}];
            console.log(myArr);
            setFavArr(myArr);
            localStorage.setItem('e-kart',JSON.stringify(myArr));
        }else{
            console.log("already ---- exists");
            const unFavItem = favArr.filter((item)=>item.id !== id);
            setFavArr(unFavItem);
            localStorage.setItem('e-kart',JSON.stringify(unFavItem));
        }
    }
    return (
    <>
    <h1>Products List</h1>
    <SearchCategory SearchItem={handleSearch}/>
            {/* <Favourite fav={favArr}/> */}
    <Container>
        <Row>
              {search && search.map((item)=>(
                <Col key={item.id}  xs={12} sm={6} md={4} lg={3} className="d-flex mb-4 card-ho">
                        <Card style={{ width: '18rem',display:'flex',alignItems:'center' }} >
                            {/* <FaRegHeart style={{}}/> */}
                            <Card.Img variant="top" src={item.image} style={{width:"200px",height:"200px"}}/>
                            <Card.Body style={{display: "flex",flexDirection: "column"}}>
                                {/* <Card.Title>{item.title}</Card.Title> */}
                                <TruncateTitle title={item.title} maxLength={15}/>
                                <Card.Text>
                                    <span>buy</span> <span  style={{color:'red',fontWeight:600}}>{item.price}  /-</span>
                                </Card.Text>
                                <Button variant="outline-dark" style={{marginBottom:"10px"}}>Add Cart</Button>
                                {/* <Button variant="outline-dark" 
                                
                                onClick={()=>favItem(item.id)}>Fav</Button> */}

                                <Button
                                        variant="outline-dark"
                                        style={{ background: favArr.some((fav) => fav.id === item.id) ? 'red' : '' }}
                                        onClick={() => favItem(item.id)}
                                    >
                                        Fav
                                    </Button>
                            </Card.Body>
                            </Card>
                </Col>
            ))}
        </Row>
    </Container>
    </>
  )
}

export default Products