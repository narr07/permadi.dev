<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: '32px',
  },
  width: {
    type: String,
    default: '32px',
  },
})
</script>

<template>
  <svg
    id="Layer_1"
    :height="height"
    :width="width"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 500 500"
    style="enable-background: new 0 0 500 500"
    xml:space="preserve"
  >
    <circle style="fill: #acd1c6" cx="250" cy="250" r="250" />
    <g>
      <g>
        <path
          style="fill: #014744"
          d="M250.3,0.1c-138.1,0-250,111.9-250,250s111.9,250,250,250s250-111.9,250-250S388.4,0.1,250.3,0.1z
			 M292.1,468.3V250.8c0-37.6,30.4-68.6,68.1-68.4c37.4,0.2,67.6,30.8,67.2,68.4c-0.4,36.9-30.7,66.9-67.6,66.9
			c-7.5,0-14.7-1.2-21.4-3.5c-1.5-0.5-3-0.7-4.4-0.7c-7.4,0-13.9,6-13.9,13.9c0,6,3.9,11.4,9.6,13.2c9.5,3.2,19.6,4.9,30.1,4.9
			c52.2,0,94.7-41.9,95.5-94c0.8-53.1-41.3-96.4-94.4-97c-26.9-0.3-51.2,10.5-68.7,28.1c-17.2,17.3-27.9,41.1-27.9,67.4v221.7
			c-4.6,0.3-9.3,0.4-13.9,0.4c-122.7,0-222.1-99.4-222.1-222.1c0-108.4,77.6-198.6,180.3-218.2v217.5c0,37.6-30.4,68.6-68.1,68.4
			c-37.4-0.2-67.6-30.8-67.2-68.4c0.4-36.9,30.7-66.9,67.6-66.9c7.5,0,14.7,1.2,21.4,3.5c1.5,0.5,3,0.7,4.4,0.7
			c7.4,0,13.9-6,13.9-14c0-6-3.9-11.4-9.6-13.2c-9.5-3.2-19.6-4.9-30.2-4.9c-52.2,0-94.7,41.9-95.5,94c-0.8,53.1,41.3,96.4,94.4,97
			c26.9,0.3,51.2-10.5,68.7-28.1c17.2-17.3,27.9-41.1,27.9-67.4V28.4c4.6-0.3,9.3-0.4,13.9-0.4c122.7,0,222.1,99.5,222.1,222.1
			C472.5,358.5,394.8,448.7,292.1,468.3z"
        />
      </g>
    </g>
    <g>
      <path
        style="fill: #014744"
        d="M356.6,250.1c0,12.5-10.1,22.5-22.5,22.5c-12.4,0-22.5-10.1-22.5-22.5c0-12.5,10.1-22.5,22.5-22.5
C346.5,227.6,356.6,237.6,356.6,250.1z"
      />
    </g>
    <g>
      <path
        style="fill: #014744"
        d="M189.3,250.1c0,12.5-10.1,22.5-22.5,22.5s-22.5-10.1-22.5-22.5c0-12.5,10.1-22.5,22.5-22.5
		S189.3,237.6,189.3,250.1z"
      />
    </g>
  </svg>
</template>
