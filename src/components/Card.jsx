import React from "react";

function Card({ username }) {
    
    return (
        
      <div className="w-60 flex flex-col rounded-xl bg-black text-white shadow-lg overflow-hidden">
        {/* Image */}
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="Bored Ape NFT"
          className="h-48 w-full object-cover object-center rounded-t-xl"
        />

        {/* Info Section */}
        <div className="flex flex-col py-4 px-4">
          {/* Title & Price */}
          <div className="flex justify-between items-center mb-2">
            <h1 className="font-bold text-lg">{username}</h1>
            <span className="text-sm text-gray-300">Price</span>
          </div>

          {/* ID & Value */}
          <div className="flex justify-between text-sm text-gray-400">
            <p>ID: #345</p>
            <p>Ξ 0.01</p> {/* Ethereum symbol */}
          </div>
        </div>
      </div>
    )
}

export default Card;