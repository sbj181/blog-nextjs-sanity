// components/HomePage.tsx
import Container from './BlogContainer';
import BlogHeader from './BlogHeader';
import Layout from './BlogLayout';
import FullScreenSlider from './FullScreenSlider';

interface HomePageProps {
  preview?: boolean;
  loading?: boolean;
}

function HomePage(props: HomePageProps) {
  const { preview, loading } = props;

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <BlogHeader title="Home" description="Welcome to the homepage" level={1} />
        <FullScreenSlider />
        <div>
          <h2>Dummy Content Section</h2>
          <p>This is some dummy content to indicate that this is the homepage.</p>
        </div>
      </Container>
    </Layout>
  );
}

export default HomePage;
