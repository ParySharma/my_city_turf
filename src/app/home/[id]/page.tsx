import React from 'react';

const ActivityView = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = !params?.id ? null : parseInt(params?.id);
  return <h1>ID :- {id}</h1>;
};

export default ActivityView;
