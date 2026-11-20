import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/contacts";

const reels = [
  { id: "DY3EaXyo980", url: "https://www.instagram.com/arkeem.german.pestcontrol6/reel/DY3EaXyo980/" },
  { id: "DYBpuwnD7EP", url: "https://www.instagram.com/arkeem.german.pestcontrol6/reel/DYBpuwnD7EP/" },
  { id: "DOCVE6eCOMK", url: "https://www.instagram.com/arkeem.german.pestcontrol6/reel/DOCVE6eCOMK/" },
];

export function InstagramReels() {
  return (
    <section id="reels" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-7 h-7 text-primary" />
            <span className="text-primary font-semibold text-lg tracking-wide">@arkeem.german.pestcontrol6</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            شاهد أعمالنا على <span className="text-primary">إنستاجرام</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            تابع آخر أعمالنا وشاهد كيف نحافظ على بيوت عملائنا آمنة من الحشرات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-full max-w-[340px]"
              data-testid={`reel-embed-${reel.id}`}
            >
              <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
                <div className="relative" style={{ paddingBottom: "177.78%", height: 0 }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                    title={`Instagram Reel ${index + 1}`}
                    allowFullScreen
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-instagram-profile"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            تابعنا على إنستاجرام
          </a>
        </motion.div>
      </div>
    </section>
  );
}
