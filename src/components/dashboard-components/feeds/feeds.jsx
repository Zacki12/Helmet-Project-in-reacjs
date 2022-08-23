import React from "react";
import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';
import {
    Card,
    CardBody,
    CardTitle,
} from 'reactstrap';

const Feeds = () => {
    return (
        <Card>
            <CardBody>
                <CardTitle>Riders Online </CardTitle>
                <div className="feed-widget">
                    <ul className="list-style-none feed-body m-0 pb-3">
                        <li className="feed-item">
                        <div className="mr-2"><img src={img1} alt="user" className="rounded-circle" width="45" /></div> Muzammil Idrees <span  className="ml-auto font-12 text-muted">Just Now</span>
                            
                        </li>
                        <li className="feed-item">
                        <div className="mr-2"><img src={img2} alt="user" className="rounded-circle" width="45" /></div> Juniad Khan<span className="ml-auto font-12 text-muted">2 Hours ago</span>
                        </li>
                        <li className="feed-item">
                        <div className="mr-2"><img src={img3} alt="user" className="rounded-circle" width="45" /></div>  Abdullah Khan<span className="ml-auto font-12 text-muted">31 May</span>
                        </li>
                        <li className="feed-item">
                        <div className="mr-2"><img src={img4} alt="user" className="rounded-circle" width="45" /></div>  Idrees Khan<span className="ml-auto font-12 text-muted">30 May</span>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
}

export default Feeds;
