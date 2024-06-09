import Logo from './Logo';
import SearchBar from './search/SearchBar';
import './header.css';
import Headerbutton from './headerbtn/headerbutton';
import Category from '../category/Category';

import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import Animmate from '../banner/Homebanner';
import Shopping from '../shopping/Slist';
//import EmojiInput from '../emojicm/Emoji';
import Emoji from '../shopping/Emoji';
import IconButton from '@mui/material/IconButton';

import './hearticon.css';


export default function Header(){
    return ( 
        <>
            <div>
                <Headerbutton/>
            </div>

            <div className='header-component'>
                <Logo/>
                <SearchBar/>
            <div className='heartimage'>
                <IconButton>
                    <IoLocationOutline style={{marginRight: '10px',fontSize: '30px', color:"black"}}/>
                </IconButton>

                <IconButton>
                     <IoIosHeartEmpty style={{marginRight: '10px', fontSize: '30px', color: "black"}}/>
                </IconButton>

                <IconButton>
                    <PiShoppingCartLight style={{fontSize:'30px', color: "black"}}/>
                </IconButton>

            </div>  
            </div>

            <div>
                <Category/>
            </div>

             <div>
                <Animmate/>
            </div> 
            <div>
                <Emoji/>
            </div>
            <div>
                <Shopping/>
            </div>
            
        </>
    )
}