import React, { useContext, useState, useEffect } from "react";
import Browse from '../components/browse';
import SelectProfileContainer from "../containers/profile";
import {FirebaseContext} from '../context/firebase'
import Loading from "../components/loading";
import Header from "../components/header";
import Player from '../components/player';
import FooterContainer from "../containers/footer";
import Card from "../components/cards";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import Fuse from 'fuse.js';

export default function BrowseContainer({slides, children, ...restProps}){
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('');
    const [category, setCategory] = useState('series');
    const [slideRows, setSlideRows] = useState([]);
    
    const {firebase} = useContext(FirebaseContext) 
    const user = firebase.auth().currentUser||{};
    //const user = JSON.parse(localStorage.getItem("user"))

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    useEffect(()=>{
        setSlideRows(slides[category])
    },[slides, category])

    useEffect(()=>{
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']});
        const results = fuse.search(searchText).map(({item})=>item);
        
        if(slideRows.length>0 && searchText.length>3 && results.length>0){
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    },[searchText])

    console.log(slides, slideRows, category)
    return profile.displayName? (
        <>
            {loading?(<Loading src={user.photoURL}/>):(<Loading.ReleaseBody/>)}
            <Header src='joker1' dontShow>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink
                            active={category=='series'?'true':'false'}
                            onClick={()=>setCategory('series')}
                            >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category=='films'?'true':'false'}
                            onClick={()=>setCategory('films')}
                            >
                            Films
                        </Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchText={searchText} setSearchText={setSearchText}></Header.Search>
                        <Header.Profile>
                            <Header.Picture src={`images/users/${user.photoURL}.png`} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={`images/users/${user.photoURL}.png`} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink to={ROUTES.SIGN_IN}>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. 
                        Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in the furtile attempt to feel he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {
                    slideRows.map((slideItem) =>{
                        return (
                            <Card key={`${category}-${slideItem.title.toLowerCase()}`} >
                                <Card.Title>{slideItem.title}</Card.Title>
                                <Card.Entities>
                                    {   
                                       slideItem.data.map(item=>{
                                        return (
                                            <Card.Item key={item.docId} item={item}>
                                                <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                                                <Card.Meta>
                                                    <Card.SubTitle>
                                                        {item.title}
                                                    </Card.SubTitle>
                                                    <Card.Text>
                                                        {item.description}
                                                    </Card.Text>
                                                </Card.Meta>
                                            </Card.Item>
                                        )
                                       }) 
                                    }
                                </Card.Entities>
                                <Card.Feature category={category}>
                                    <Player >
                                        <Player.Button/>
                                        <Player.Video src='/videos/bunny.mp4'/>
                                    </Player>
                                </Card.Feature>
                            </Card>
                        )
                    })
                }
            </Card.Group>
            <FooterContainer/>
        </>
    ):(
        <SelectProfileContainer user={user} setProfile={setProfile}/>
    )
}