// import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
// import CuriousMemoji from '../../assets/avatar6.png';
// import SearchIcon from '../../assets/Search.png';
// import PlayIcon from '../../assets/PlayiconPlay.png';
// import EyeIcon from '../../assets/EyeIconSeen.png';
// import ProfilePic from '../../assets/Obafemi Olorungbon.png';
// import NextForwardIcon from '../../assets/NextForwardIcon.png';
// import PrevIcon from '../../assets/PrevForwardIcon.png';
// import { CustomCarousel } from '../Carousel/CustomElasticCarousel';
// import { ButtonGroup, Col, Offcanvas, Row } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { set_active_post } from '../../pages/HomePage/redux/reducer.redux';
// import { selectActivePost } from '../../pages/HomePage/redux/selectors';

// export default function Cards({ posts }) {
//   const dispatch = useDispatch();
//   const PrevNavigate = useRef(null);
//   const [open, setOpen] = useState(false);
//   const handleClose = () => setOpen(false);

//   const setOpenDrawer = (post) => {
//     setOpen(true);
//     dispatch(set_active_post({ payload: post }));
//   };

//   function click() {
//     PrevNavigate.current.click();
//   }
//   return (
//     <>
//       <div className="Top-Cards">
//         <div className="TopWideCard_Container">
//           <CustomCarousel renderedArrow={PrevNavigate}>
//             {posts &&
//               posts.map((post, index) => (
//                 <TopWideCard
//                   setPost={setOpenDrawer}
//                   key={index}
//                   post={post}
//                 ></TopWideCard>
//               ))}
//           </CustomCarousel>
//         </div>
//         <TopSideCard />
//       </div>
//       <div className="Bottom-Cards">
//         <BottomCards
//           NavigatorLeft={PrevNavigation}
//           NavigatorRight={NextNavigation}
//           navigate={click}
//         />
//       </div>
//       <Drawer handleClose={handleClose} open={open} />
//     </>
//   );
// }

// Cards.propTypes = {
//   posts: PropTypes.array
// };

// Cards.defaultProps = {
//   posts: []
// };
