import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
        {/* Story */}
        <Story
            image="https://www.masala.tv/wp-content/uploads/2015/11/Chicken-Lasagna-1.jpg"
            profileSrc="https://i.pinimg.com/originals/1c/19/b3/1c19b3230ee18c3d73d37aadf81cc76b.jpg"
            title="Monica Geller"
        />
        <Story
            image="https://i.pinimg.com/736x/34/db/87/34db871e6a9117ab82841a3ecda9b526.jpg"
            profileSrc="https://static2.srcdn.com/wordpress/wp-content/uploads/2019/03/Chandler-Bing-Friends-1.jpg"
            title="Chandler Bing"
        />
        <Story
            image="https://i.pinimg.com/originals/41/59/44/415944a57a69d2dfe5cc7147369e001a.png"
            profileSrc="https://i.pinimg.com/originals/cf/de/8d/cfde8d27378c73ddbb23bc216c1a7bfa.jpg"
            title="Joey Tribbiani"
        />
        <Story
            image="https://images.news18.com/ibnlive/uploads/2015/08/Phoebe-Guitar.jpg"
            profileSrc="https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg"
            title="Phoebe Buffay"
        />
        <Story
            image="https://media.istockphoto.com/photos/many-beautiful-wedding-dresses-picture-id858131718?k=20&m=858131718&s=612x612&w=0&h=Zf4_rwBvixjLAoW9Nuv9F58sBLbktAn_gKsyY1y_0YQ="
            profileSrc="https://e3.365dm.com/19/09/1600x900/skynews-rachel-green-friends_4780471.jpg?20190920100815"
            title="Rachel Green"
        />
        
        
            
        </div>
    )
}

export default StoryReel

