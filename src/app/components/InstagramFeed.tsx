import { Instagram } from 'lucide-react';
import { useEffect } from 'react';

export function InstagramFeed() {
  useEffect(() => {
    // Force the script to reload so it detects the div in our React app
    const id = "EmbedSocialHashtagScript";
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }
    
    const js = document.createElement("script");
    js.id = id;
    js.src = "https://embedsocial.com/cdn/ht.js";
    document.getElementsByTagName("head")[0].appendChild(js);
  }, []);

  return (
    <section className="py-16 px-6 md:px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white mb-4 shadow-md">
            <Instagram className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Connect with us on Instagram
          </h2>
          <p className="text-gray-600" style={{ fontFamily: 'var(--font-body)' }}>
            Stay updated with our latest workshops, events, and student success stories.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto min-h-[400px]">
          <div className="embedsocial-hashtag" data-ref="64156aa60cf2255f4c18cf5ced9d167fb9bcf026">
            <a className="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding" href="https://embedsocial.com/instagram-widget/" target="_blank" rel="noreferrer" title="Instagram widget">
              <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
              <div className="es-widget-branding-text">Instagram widget</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
