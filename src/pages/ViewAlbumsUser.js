import React from "react";

export default function ViewAlbumsUser({ listAlbums }) {
  const ViewThePhotos = (id) => {
    // Code logic for viewing the photos
  };

  return (
    <div>
      <ul>
      {listAlbums.map((album) => (
        <li key={album.id}>
          <a href="#" onClick={() => ViewThePhotos(album.id)}>
            {album.title}
          </a>
        </li>
      ))}
      </ul>
    </div>
  );
};
