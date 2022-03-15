import React, { useEffect, useState } from 'react'
import AppLayout from '../../../layout/AppLayout'
import ReactPlayer from 'react-player';
import PromoApi from '../../../api/promos';
import LIKE_IMG from '../../../assets/images/likePromo.png';
import DISLIKE_IMG from '../../../assets/images/dislike.png';
import { href } from '../../../constants/extra';
import { toast } from 'react-toastify';

function Promos() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        PromoApi.getAllPromoVideosForPatient().then(res => {
            setVideos(res.data.data);
        });
    }, []);

    const likePromoVideo = (id, e) => {
        e.preventDefault();
        PromoApi.likePromo(id).then(res => {
            toast.success("Video liked");
            const videosTemp = JSON.parse(JSON.stringify(videos));
            videosTemp.map(vid => {
                if (vid._id === id) {
                    vid.likes += 1;
                }
            });
            setVideos(videosTemp);
        }).catch(err => {
            toast.error("Error while liking the video");
        });
    }

    return (
        <AppLayout>
            <section class="feed-section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-8">
                            <div class="card">
                                <div class="card-body">
                                    {videos?.map(vid => (
                                        <>
                                            <h4>{vid?.hospitalId.name}</h4>
                                            <ReactPlayer
                                                url={vid.url}
                                                width="100%"
                                                height="100%"
                                                controls={true}
                                            />
                                            <p class="mb-2">
                                                <a href={href} onClick={likePromoVideo.bind(this, vid._id)} class="mr-3"> <span style={{ fontSize: '1.1rem', fontWeight: "bold" }}>{vid.likes}</span> <img width="15" src={LIKE_IMG} alt="like" style={{ marginBottom: '5px', marginLeft: '3px' }} /> Like</a>
                                                {/* <a href="javascript:void(0)"><img width="15" src={DISLIKE_IMG} alt="like" /> Dislike</a> */}
                                            </p>
                                            <hr />
                                        </>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Promos
