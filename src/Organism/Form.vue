<template>
  <div id="form" class="font-mont">
    <form
      name="contact"
      method="POST"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="flex flex-col items-center justify-center">
        <div class="w-full space-y-8">
          <FormInput
            id="name"
            name="name"
            type="text"
            required
            label-class=" text-lab-navy uppercase"
            >Name*</FormInput
          >
          <FormInput
            id="discord"
            name="discord"
            type="text"
            label-class=" text-lab-navy uppercase"
            >Discord Username including #</FormInput
          >
          <FormInput
            id="twitter"
            name="twitter"
            type="text"
            required
            label-class=" text-lab-navy uppercase"
            >Twitter*</FormInput
          >
          <FormInput
            id="email"
            name="email"
            type="email"
            required
            label-class=" text-lab-navy uppercase"
            >Email*</FormInput
          >
        </div>

        <FormTextarea
          id="textArea"
          name="textArea"
          class="w-full"
          required
          label-class=" text-lab-navy  uppercase"
          input-class="bg-darkGrey h-full "
          >Message*</FormTextarea
        >
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn btn-pink">Send</button>
      </div>
    </form>
  </div>
</template>
