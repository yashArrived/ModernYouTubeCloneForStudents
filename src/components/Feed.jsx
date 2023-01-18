import {useState , useEffect} from 'react'
import { Block , Stack , Typography } from '@mui/material'
import { Box } from '@mui/system'
import {Sidebar , Videos} from './'
// import Videos from './Videos'
import Link from '@mui/material/Link';

import { fetchFromAPI } from '../utils/fetchFromAPI'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Instagram } from '@mui/icons-material';


const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState("Indian Music");

  const [ videos , setVideos] = useState([]);

  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
   <Stack sx={{flexDirection:{sx:'column' , md:"row"}}}>

     <Box sx={{height : {sx:'auto' , md:"92vh"} , borderRight:'1px solid #3d3d3d', px:{sx:0, md:2 }}}>
   <Sidebar 
   selectedCategory={selectedCategory}
   setSelectedCategory = {setSelectedCategory}
   />
      <Typography className='copyright' variant='body2' sx={{mt:1.5 , color: '#fff' , position:'sticky' }}>
        
      <Link className='btn'mr={2} color="#FF0000" href="https://www.linkedin.com/in/yasharrived/"><LinkedInIcon/>
      </Link>
      <Link className='btn' mr={2} color="#FF0000" href="https://twitter.com/yashArrived"><TwitterIcon/>
      </Link>
      <Link className='btn'  color="#FF0000" href="https://github.com/yashArrived"><GitHubIcon/>
      </Link>
      <Link className='btn' ml={2} color="#FF0000" href="https://www.instagram.com/yasharrived/"><Instagram/>
      </Link>
      </Typography>
      </Box>

    <Box p={2} sx={{overflowY:'auto' ,
     height:'90vh' , flex:2}} >
    <Typography variant='h4'
    fontWeight='bold'  mb={2} sx={{color:'white'}}> 
    {selectedCategory} &nbsp;
    <span  style={{color:'#f31503'}}>
    Videos
    </span>
    </Typography>
    <Videos videos={videos} />

    </Box>

   </Stack>
  )
}

export default Feed