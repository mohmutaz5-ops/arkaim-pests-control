import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { openWhatsApp } from "@/lib/whatsapp";
import { INSTAGRAM_URL, isContactPhone } from "@/lib/contacts";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "الاسم يجب أن يكون أكثر من حرفين" }),
  phone: z.string().trim().max(32, { message: "رقم الهاتف غير صحيح" }).refine(isContactPhone, { message: "رقم الهاتف غير صحيح" }),
  service: z.string().min(1, { message: "الرجاء اختيار الخدمة" })
});

export function ContactForm() {
  const [handoff, setHandoff] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const labels: Record<string, string> = { صراصير: "مكافحة الصراصير", نمل: "مكافحة النمل الأبيض", فئران: "مكافحة الفئران والقوارض", بق: "مكافحة البق", شاملة: "مكافحة شاملة" };
    const msg = `مرحباً أركيم 👋\nاسمي: ${values.name}\nرقمي: ${values.phone}\nأريد الاستفسار عن: ${labels[values.service] || values.service}`;
    setHandoff(true);
    openWhatsApp(msg);
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-card border border-primary/30 p-8 md:p-12 rounded-3xl shadow-xl shadow-primary/5">
            <h2 className="text-3xl font-black mb-2">طلب <span className="text-primary">معاينة مجانية</span></h2>
            <p className="text-muted-foreground mb-8">املأ النموذج وسنقوم بالاتصال بك لتحديد الموعد المناسب.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>الاسم بالكامل</FormLabel>
                      <FormControl>
                         <Input placeholder="أدخل اسمك" autoComplete="name" {...field} className="h-12 bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>رقم الهاتف</FormLabel>
                      <FormControl>
                         <Input placeholder="01xxxxxxxxx" type="tel" inputMode="tel" autoComplete="tel" {...field} className="h-12 bg-background text-left" dir="ltr" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نوع الخدمة المطلوبة</FormLabel>
                       <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder="اختر الخدمة" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="صراصير">مكافحة الصراصير</SelectItem>
                          <SelectItem value="نمل">مكافحة النمل الأبيض</SelectItem>
                          <SelectItem value="فئران">مكافحة الفئران والقوارض</SelectItem>
                          <SelectItem value="بق">مكافحة البق</SelectItem>
                          <SelectItem value="شاملة">مكافحة شاملة</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-14 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <SiWhatsapp className="w-5 h-5 ml-2" />
                  أرسل على واتساب
                </Button>
              </form>
            </Form>
            {handoff && <p role="status" className="mt-4 text-sm">تم تجهيز رسالتك. اضغط إرسال داخل واتساب لإتمام الطلب.</p>}
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">تواصل معنا <span className="text-primary">مباشرة</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                نحن متاحون على مدار الساعة للرد على استفساراتكم وحل مشاكلكم بأسرع وقت.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-2xl border border-border flex items-center gap-6">
               <img src="/instagram.webp" width={188} height={181} alt="Instagram" loading="lazy" decoding="async" className="w-20 h-20 shrink-0 rounded-full object-cover border-2 border-primary" />
              <div className="min-w-0">
                <h4 className="font-bold text-xl mb-1">تابعنا على انستجرام</h4>
                <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="block wrap-anywhere text-right text-primary hover:underline" dir="ltr">@arkeem.german.pestcontrol6</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:01080808564" className="font-bold hover:text-primary transition-colors" dir="ltr">010 8080 8564</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
