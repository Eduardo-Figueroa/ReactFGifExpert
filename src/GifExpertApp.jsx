import { useState } from 'react';
import { AddCategory, GiftGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //Agregar elemento
        if(categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories, ])
    }; 

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ e => onAddCategory(e) }
            />


            <button onClick={onAddCategory}>Agregar</button>
            
                { categories.map( category => 
                        (
                            <GiftGrid key= {category} category={category}/>
                            // <div key={ category }>
                            //     <h3>{ category}</h3>
                            //     <li>{category}</li>
                            // </div>
                        )
                    ) 
                }
               
    
                {/* Gif Item */}
        </>
    )
}
