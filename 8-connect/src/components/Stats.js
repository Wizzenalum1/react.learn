import React from 'react';
import { StoreContext } from '../index'
export default function Stats() {
    // way 1 of using the connsumer but in this case store won't be available to the lifecycle methods.
    // here just wraping the return value by storecontext and this assume a function inside it.
    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    console.log(store.getState().movie);
                    const {list,favourites} = store.getState().movie;
                    console.log(list,favourites);
                    return(
                        <div>
                            hey you made {favourites.length} favourites from {list.length} 
                        </div>
                        )

                }
            }

        </StoreContext.Consumer>
    )
}
