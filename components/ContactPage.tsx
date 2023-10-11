// components/ContactPage.tsx
import Container from './BlogContainer';
import BlogHeader from './BlogHeader';
import Layout from './BlogLayout';

interface ContactPageProps {
  preview?: boolean;
  loading?: boolean;
}

function ContactPage(props: ContactPageProps) {
  const { preview, loading } = props;

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <BlogHeader title="Contact" description="Contact us here" level={1} />
        <div>
          <h2>Dummy Content Section</h2>
          <p>This is some dummy content to indicate that this is the Contact page.</p>
        </div>
      </Container>
    </Layout>
  );
}

export default ContactPage;
