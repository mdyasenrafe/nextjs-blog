export default function page({ params }: { params: { slug: string } }) {
  console.log("working");
  console.log("params", params);
  console.log("params.slug", params.slug);
  return (
    <div>
      <h1>My Post: {params.slug}</h1>
      <p>working {params.slug} wan</p>
    </div>
  );
}
