import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiWhatsapp } from "react-icons/si";
import { openWhatsApp } from "@/lib/whatsapp";
import { isContactPhone } from "@/lib/contacts";
import { useState } from "react";

const formSchema = z.object({
  name:    z.string().trim().min(2, { message: "الاسم يجب أن يكون أكثر من حرفين" }),
  phone:   z.string().trim().max(32, { message: "رقم الهاتف غير صحيح" }).refine(isContactPhone, { message: "رقم الهاتف غير صحيح" }),
  service: z.string().min(1, { message: "الرجاء اختيار الخدمة" }),
});

const serviceLabels: Record<string, string> = {
  صراصير:  "مكافحة الصراصير",
  نمل:     "مكافحة النمل الأبيض",
  فئران:   "مكافحة الفئران والقوارض",
  بق:      "مكافحة البق",
  شاملة:   "مكافحة شاملة",
};

export function QuickRequestForm() {
  const [handoff, setHandoff] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", phone: "", service: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const label = serviceLabels[values.service] ?? values.service;
    const msg = `مرحباً أركيم 👋\nاسمي: ${values.name}\nرقمي: ${values.phone}\nأريد الاستفسار عن: ${label}`;
    setHandoff(true);
    openWhatsApp(msg);
  }

  return (
    <section className="relative z-10 py-12 px-4">
      <div className="container mx-auto">
        <div className="bg-primary rounded-3xl shadow-2xl shadow-primary/30 px-6 py-8 md:px-10 md:py-10">
          <div className="text-center mb-8">
            <h2 className="text-white font-black text-2xl md:text-3xl mb-2">
              طلب استشارة مجانية
            </h2>
            <p className="text-white/70 text-sm">
              أملأ بياناتك وسنتواصل معك فوراً عبر واتساب
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col md:flex-row gap-4 items-start md:items-end"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormControl>
                      <Input
                        placeholder="* الاسم"
                         aria-label="الاسم"
                         autoComplete="name"
                        {...field}
                        data-testid="input-quick-name"
                        className="h-14 bg-white text-gray-800 placeholder:text-gray-500 border-0 rounded-xl text-base font-medium"
                      />
                    </FormControl>
                    <FormMessage className="text-white/90 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <FormControl>
                      <Input
                        placeholder="* رقم الموبايل"
                         aria-label="رقم الموبايل"
                         type="tel"
                         inputMode="tel"
                         autoComplete="tel"
                        {...field}
                        dir="ltr"
                        data-testid="input-quick-phone"
                        className="h-14 bg-white text-gray-800 placeholder:text-gray-500 border-0 rounded-xl text-base font-medium"
                      />
                    </FormControl>
                    <FormMessage className="text-white/90 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem className="flex-1 w-full">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger
                          data-testid="select-quick-service"
                          aria-label="نوع الخدمة المطلوبة"
                          className="h-14 bg-white text-gray-500 border-0 rounded-xl text-base font-medium"
                        >
                          <SelectValue placeholder="* أختر الخدمة" />
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
                    <FormMessage className="text-white/90 text-xs mt-1" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                data-testid="button-quick-submit"
                className="h-14 px-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-black text-base rounded-xl shrink-0 w-full md:w-auto shadow-lg"
              >
                <SiWhatsapp className="w-5 h-5 ml-2" />
                أرسل على واتساب
              </Button>
            </form>
          </Form>
          {handoff && <p role="status" className="mt-4 text-white text-sm">تم تجهيز رسالتك. اضغط إرسال داخل واتساب لإتمام الطلب.</p>}
        </div>
      </div>
    </section>
  );
}
