import React, { useRef, useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './ViewPO.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams,useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';



const ViewPO = () => {

    const navigate = useNavigate()

    const componentRef = useRef();
    const { id } = useParams("");
    console.log(id)
    const [data, setdata] = useState([]);
    console.log(data);

    



    const getdata = async (e) => {

        const res = await fetch(`http://localhost:8003/getpo/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error")
        } else {

            setdata(data);
            console.log("get data")
        }

    }


    useEffect(() => {
        getdata();
    }, [])

    const deletepo = async(id)=>{
        console.log("delete");

        const res2 = await fetch(`http://localhost:8003/delete/${id}`,{
          method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  
        }
        )
      
        const deletepo = await res2.json()
      console.log(deletepo)
      if(res2.status === 404|| !deletepo){
        console.log("error")
      }else{
        console.log("deleted")
        alert("user deleted")
        navigate("/")

      }
           
      };
   

    return (
        <>

            <div className='container ' >

                <div className='home_print mt-4'>
                    <Link to="/">
                        <HomeIcon fontSize='large' />
                    </Link>
                    <ReactToPrint
                        trigger={() => { return <LocalPrintshopIcon fontSize='large' style={{ "cursor": "pointer" }} /> }}
                        content={() => componentRef.current}
                        documentTitle="invoice"
                        pageStyle="print" />

                </div>
                <div className='header mt-5'> 
                <h1 className='mb-3 mt-5'>Purchase Order</h1>
                <div className='icons'>
                                
                                <DeleteIcon fontSize='large' onClick = {()=>{deletepo(data._id)}} />
                            </div>
                </div>
                <Card sx={{ minWidth: 275 }} ref={componentRef} >
                    <CardContent>
                      

                      

                        <div className='leftright mt-5'>
                            <div className='left'>
                                <h3>Order# :<span>{data.order}</span></h3>
                                <h3>Date :<span>{data.date}</span></h3>
                                <h3>PO# : <span>{data.po}</span></h3>
                                <h3>Customer Name :<span>{data.name}</span></h3>
                            </div>

                            <div className='right'>
                                <h3>Item ID :<span>{data.id}</span></h3>
                                <h3>Status :<span>{data.status}</span></h3>
                                <h3>Created By :<span>{data.createdby}</span></h3>
                                <h3>Order Price :<span>₹ 500</span></h3>

                            </div>
                        </div>
                        <h4 style={{"marginLeft":"10px"}}>Address :<span>{data.address}</span></h4>

                      
                    </CardContent>
                </Card>

            </div>

        </>
    )
}

export default ViewPO