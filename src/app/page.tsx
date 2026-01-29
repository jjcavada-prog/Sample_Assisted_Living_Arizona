import type { Metadata } from 'next';
import HomepageInteractive from './homepage/components/HomepageInteractive';

export const metadata: Metadata = {
    title: "Sample Assisted Living - Premium Assisted Living in Scottsdale, AZ",
    description: "Experience family-sized care in a home-like setting at Sample Assisted Living. Our boutique assisted living facility in Scottsdale provides personalized attention for up to 10 residents with dignity, joy, and genuine human connection.",
};

export default function Home() {
    return <HomepageInteractive />;
}
