<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const username = ref("")
const password = ref("")
const error = computed(() =>
  username.value === "" ? "username required" : ""
)
const errors = computed(() =>
  password.value === "" ? "password required" : ""
)
const loginPage = () => {
  if (username.value === 'admin' && password.value === 'admin') {
    router.push({ name: 'dashboard' })
  } else if ((username.value != 'admin' && password.value != 'admin')) {
    return 'shoma be page nemitavanid vard shavid'
  }

}
</script>

<template>
  <div class="flex items-center flex-col mt-32  justify-center ">
    <span class="text-black text-2xl uppercase">login page</span>
    <form>
      <div class="mt-10">
        <label>نام کاربری
          <input placeholder="نام کاربر واردکنید" autocomplete="off" class="border border-solid border-black"
            v-model="username" type="text" />
          {{ error }}
        </label>
      </div>
      <div class="mt-5">
        <label>کلمه عبور
          <input autocomplete="off" placeholder="کلمه عبور راوارد کنید" type="password"
            class="border border-solid border-black" v-model="password" />
          {{ errors }}
        </label>
      </div>
      <div class="flex items-center justify-center mt-10  ">
        <input @click.prevent="loginPage" type="submit" value="login"
          class="bg-green-400 w-full text-white h-10 cursor-pointer rounded-full" />
      </div>

    </form>
  </div>

</template>

<style scoped>
</style>
