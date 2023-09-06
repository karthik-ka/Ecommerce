export const Shimmer_4 = () => {
  return (
    <>
      <div className="bg-eco-light-grey rounded-xl w-full h-[180px] xl:h-[280px] animate-pulse animate-infinite"></div>
      <div className="bg-eco-light-grey rounded-xl w-full h-[180px] xl:h-[280px] animate-pulse animate-infinite"></div>
      <div className="bg-eco-light-grey rounded-xl w-full h-[180px] xl:h-[280px] animate-pulse animate-infinite"></div>
      <div className="bg-eco-light-grey rounded-xl w-full h-[180px] xl:h-[280px] animate-pulse animate-infinite"></div>
    </>
  );
};
export const Shimmer_1 = () => {
  return (
    <>
      <div className="bg-eco-light-grey rounded-xl w-full row-span-2 col-span-2 animate-pulse animate-infinite"></div>
    </>
  );
};

export const Collection_skelton = () => {
	return (
	<>
		<div className="bg-eco-light-grey rounded-xl w-full h-56 lg:h-64 xl:h-72 animate-pulse animate-infinite"></div>
	</>
	);
  };

export const Procuct_skelton = ({card}) => {
	return (
		<>
			{
				Array(card).fill("").map((e, index) => (
					<div key={index} className="bg-eco-light-grey rounded-xl w-full h-56 lg:h-64 xl:h-72 animate-pulse animate-infinite"></div>
				))
			}
		</>
	);
};

export const Img_Skelton = () => {
	return (
		<>
			{
				Array(5).fill("").map((e, index) => (
				<div key={index} className="bg-eco-light-grey rounded-xl w-full h-[90px] animate-pulse animate-infinite"></div>
				))
			}
		</>
	)
}
export const Thumb_Skelton = () => {
	return (
		<>
			<div className="bg-eco-light-grey rounded-xl w-full animate-pulse animate-infinite"></div>
		</>
	);
};