<script>
	import { page } from '$app/stores';
</script>

<p>Some error happened</p>

<pre>{page}</pre>
<pre>
  JSON.stringify($page, null, 2);
</pre>
