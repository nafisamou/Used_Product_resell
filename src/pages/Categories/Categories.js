import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard'
// import './Categories.css'

const Categories = () => {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))

    },[]);
    return (
        <div className='mt-20'>
        <h1 className='text-center text-bold text-2xl'>Categories</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                categories.map(category=> <CategoryCard
                key={category._id}
                category={category}
                >    
                </CategoryCard>)
            }

        </div>
    </div>
      );
};

export default Categories;