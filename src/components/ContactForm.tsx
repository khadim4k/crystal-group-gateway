import { useState } from "react";
import { Send, Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    method: "email" as "email" | "whatsapp"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.method === "email") {
      window.location.href = `mailto:contact@crystalgroup.sn?subject=Contact depuis le site - ${formData.service}&body=Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATéléphone: ${formData.phone}%0D%0AService: ${formData.service}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    } else {
      const hour = new Date().getHours();
      const greeting = hour >= 18 || hour < 5 ? "Bonsoir" : "Bonjour";
      const text = `${greeting}, je suis ${formData.name}.%0D%0AJe vous contacte concernant : ${formData.service}.%0D%0A%0D%0A${formData.message}`;
      window.open(`https://wa.me/221774995757?text=${text}`, '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Left Info Panel */}
            <div className="bg-primary p-8 md:p-12 text-primary-foreground flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  Une question ? Un projet ? N'hésitez pas à nous contacter. Notre équipe est à votre disposition.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-secondary">Adresse</h4>
                      <p className="text-primary-foreground/90">Dakar, Sénégal</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-secondary">Téléphone</h4>
                      <p className="text-primary-foreground/90">+221 77 499 57 57</p>
                      <p className="text-primary-foreground/90">+221 78 786 58 55</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-secondary">Email</h4>
                      <p className="text-primary-foreground/90">contact@crystalgroup.sn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-1 text-secondary">Horaires</h4>
                      <p className="text-primary-foreground/90">Lun - Ven : 8h - 18h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-2 p-8 md:p-12 bg-card">
              <div className="text-center lg:text-left mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-4">Contactez-nous</h2>
                <p className="text-muted-foreground">Parlez-nous de votre projet, nous sommes à votre écoute.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom complet</label>
                    <input
                      required
                      type="text"
                      placeholder="Votre nom"
                      className="w-full p-3 rounded-lg bg-background border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Votre email"
                      className="w-full p-3 rounded-lg bg-background border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone</label>
                    <input
                      required
                      type="tel"
                      placeholder="+221 XX XXX XX XX"
                      className="w-full p-3 rounded-lg bg-background border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service concerné</label>
                    <select
                      required
                      className="w-full p-3 rounded-lg bg-background border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="Horizon TP - Travaux Publics">Horizon TP (Travaux Publics)</option>
                      <option value="Maison Solis - Immobilier">Maison Solis (Immobilier)</option>
                      <option value="SE2I - Ingénierie">SE2I (Ingénierie)</option>
                      <option value="Groupe - Autre">Autre demande</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Décrivez votre projet..."
                    className="w-full p-3 rounded-lg bg-background border border-input focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium mb-2 block">Envoyer via</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, method: 'email'})}
                      className={`flex-1 p-4 rounded-xl border flex items-center justify-center gap-3 transition-all font-medium ${formData.method === 'email' ? 'border-secondary bg-secondary/10 text-secondary ring-1 ring-secondary' : 'border-input hover:bg-muted text-muted-foreground'}`}
                    >
                      <Mail className="h-5 w-5" /> Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, method: 'whatsapp'})}
                      className={`flex-1 p-4 rounded-xl border flex items-center justify-center gap-3 transition-all font-medium ${formData.method === 'whatsapp' ? 'border-[#25D366] bg-[#25D366]/10 text-[#25D366] ring-1 ring-[#25D366]' : 'border-input hover:bg-muted text-muted-foreground'}`}
                    >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.536 0 1.52 1.115 2.988 1.264 3.186.149.198 2.19 3.349 5.273 4.695 2.151.94 2.988.94 3.984.94.774 0 1.756-.316 2.005-1.042.249-.727.249-1.365.175-1.49-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.96.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg> WhatsApp
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl gradient-primary text-primary-foreground font-bold text-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-6"
                >
                  <Send className="h-5 w-5" /> Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;