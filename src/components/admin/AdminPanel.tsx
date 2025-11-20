import { useState } from "react"
import { Button } from "@/components/ui/but
import { Textarea } from "@/components/ui/texta
import { Card } from "@/components/ui/card"
import { 
  Trash, 
  X,
  GearSix
import { 

  onClose
}
expo
  cons
  const h
    toast.success("Alterações 

    setContent((current) => ({

  }
  const updateAbout =
      ...current,
 

    setContent((current) => {
      newBio[index] = value
        ...current,

  }
  const addAboutBioParagraph = () => {
      ...current,
   

  const updateHero = (field: keyof SiteContent["hero"], value: string) => {
    setContent((current) => ({
      ...current,
      hero: { ...current.hero, [field]: value }
    }))
  }

  const updateAbout = (field: string, value: string | string[]) => {
    setContent((current) => ({
      ...current,
      about: { ...current.about, [field]: value }
    }))
  }

  const updateAboutBio = (index: number, value: string) => {
    setContent((current) => {
      const newBio = [...current.about.bio]
      newBio[index] = value
      return {
        ...current,
        about: { ...current.about, bio: newBio }
      }
    })
  }

  const addAboutBioParagraph = () => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        bio: [...current.about.bio, ""]
      }
    }))
  }

  const removeAboutBioParagraph = (index: number) => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        bio: current.about.bio.filter((_, i) => i !== index)
      }
    }))
  }

  const updateAboutCredential = (index: number, field: "title" | "description", value: string) => {
    setContent((current) => {
      const newCredentials = [...current.about.credentials]
      newCredentials[index] = { ...newCredentials[index], [field]: value }
      return {
        ...current,
        about: { ...current.about, credentials: newCredentials }
      }
    })
  }

  const addAboutCredential = () => {
    setContent((current) => ({
      ...current,
      about: {
        ...current.about,
        credentials: [...current.about.credentials, { title: "", description: "" }]
      }
    }))
  }

      ...current,
        ...current.services,
      }
  }
  const updateTestimonial
      const newTestimonials = [...current.testimonials.testimonials]
      r
       
   

    setContent((current) => ({
      testimonials: {
        testimonials: [...current.testimonials.testimoni
    }))

    setContent((cur
      testimonials: {
       
    })


      newFAQs[index] = { ...
        ...current,
      }
  }
  const addFAQ = () => {
      ...current,
       
      }
  }

      ...current,
        ...current.faq,
      }
  }
  const updateContact = (fie
      ...current,
    }))

   

  }
  return (
      <div className="min-h-screen py-8 px-6">
          <div className="flex items-center justify-between mb-8">
              
            </div>
              <Button
       
      
   

                className="bg-ac
                <FloppyDisk we
              </B
                varia
                onClick={onClose
                <X weight="bold" />
       

   

                <TabsTrigger value="services">Se
                <TabsTrigger v
                <

                <div>
                  <Input
       
       
   

                  <Input
                    value={co
                    className="mt-2"
                </div>
              
                   
                    onChange={(e) => updateHer
       
      
   

                      on
                    />
                 
            
                      v
                      className="mt-2"
       
       
   

                    id="about-profile-im
                    onChange={
                 
            
                  <div>
                    <Input
       
       
   

                      id="about-subtitle"
                      onChange
                 
                </div>
       
   

                  />
                <div>
                 
                      type="button"
       
   

          
                    {content.about.bio.map((paragraph, index) => (
                        <Textarea
                          onChange={(e) => 
                          placeholder={`Parágrafo ${index + 1}`}
                        <Button
                          variant="destructive"
                          onClick={() => removeAboutBioParagraph(index)}
                  
                      </div>
                  </d
                <div>
                    <Label classNam
                      type="butto
               
                    >
                      Adicionar
                  </div
                    {
                        <div classNa
                            <Input
               
                            />
                              val
                       
                     
                            type=
                           
                          >
               
                      </Card>
                  </div
              </Ta
              <T

                    <Input
                      value={content.services.title}
                        ...current,
                      }))}
                    />
                  <div>
                    <Input
                      value={content.services.subtitle}
                        ...current,
                      }))}
                    />

                  <div className="flex items-center justify-be
                    <
                      size="sm"
                      className="gap-2"
                      <Plus weight="bold" />
                    </Button>
                  <div className="space-y-
                    
                      
                     
                                id={`service-icon-${index}`}
                        
                                placeh
                            </div>
                              value={service.title}
                              placeh
                    
                      
                     
                          </div>
                           
                            size="icon"
                          >
                          </Button>
                      </Card>
                  </
              </TabsCo
              <TabsContent value="testimonials" className="
                  <div>
                    <Input
                      valu
                        ...current,
                      }))}
                    />
                  <div>
                    <I
                      va
                       
                      }))}
                    />
                </div>
                  <div className="flex items-center jus
                    <Button
                      size="sm"
                      
                      <P
                    </
                  <div class

                          <div className="flex-1 space-y-3">
                     
                              pl
                            />
                              <Input
                                onChange={(e) => updateTestimonial(index, "author"
                              />
                    
                      
                            </div>
                       
                            variant="destructive"
                          
                            <Trash wei
                        </div>
                    ))}
                </div>

                <div cla
                    <La
                      id="faq-title"
                      onCh
                        faq: { ...current
                      className="mt-2"
                  </div>
                    <Label htmlFor="fa
                      
                      on
                      
                     
                  </div>
                <div>
                    <Label classNam
                      type="button"
                      onClick={addFAQ}
                    >
                    
                  </di
                    {
                        <div className="flex gap-4">
                            <Input
                           
                            />
                              v
                              placeholder="Resposta"
                            />
                     
                            variant="destruc
                            onClick={() =
                            <
                        
                    ))}
                </div>

                <div className="g
                    <Label htmlFor="contact
                      id="contact-title"
                      onChange={(e) => updateConta
                    />
                  <div>
                    <Input
                      value={content.co
                      className="mt-2"
                  </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Labe
                      id="contact-whatsapp"
                      onChange={(
                      classN
                  </div
                    <Lab
                      
                     
                      className="mt-2"
                  </div>
                    <Label 
                      id="contact-e
                      onChange=
                      className="mt-2"
                  </div>
                <div>
                  <Textarea
                    value={content.contact
                    className
                  />
              </TabsContent>
              <TabsContent value="footer" className="space-y-6">
                  <div>
                    <Input
                      value={content.footer.name}
                      className="m
                  </div>
                    <Label htmlFor="footer-crp" className="text-base font-semibold">CRP e Informações
                      id="footer-crp"
                      onChange
                      placeholder=
                  </div>
                <div>
                  <Textarea
                    value={con
                    className="m
                </div>
                  <div>
                    <Input
                      value={content.fo
                      className="mt-2"
                  </div>
                    <Label htmlFor="footer-email" c
                      id="footer-em
                      onChange
                    />
                  <div>
                    <Tex
                      
                      classN

              </TabsContent>
          </Card>
      </div>
  )







































































































































































































































































































































































