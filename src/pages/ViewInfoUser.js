import React from "react";

export default function ViewInfoUser({ user }) {
  return (
    <div>
      <p>name: {user.name}</p>
      <p>user name: {user.username}</p>
      <p>email: {user.email}</p>
      <p>phone: {user.phone}</p>
      <p>website: {user.website}</p>
      <p>address:</p>
      <p>
        street: {user.address.street}
        <br />
        suite: {user.address.suite}
        <br />
        city: {user.address.city}
        <br />
        zipcode: {user.address.zipcode}
        <br />
        geo: lat: {user.address.geo.lat} lng: {user.address.geo.lng}
      </p>
      <p>company:</p>
      <p>
        name: {user.company.name}
        <br />
        catchPhrase: {user.company.catchPhrase}
        <br />
        bs: {user.company.bs}
      </p>
    </div>
  );
};

