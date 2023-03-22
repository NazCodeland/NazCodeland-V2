<script>
</script>

<section class="m-auto w-[60ch]">
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)]">Create new blog post</h1>
	<form class="flex flex-col gap-6">
		<label for="title">
			Title:
			<input class="flex w-full outline outline-1 outline-[canvasText]" name="title" type="text" />
		</label>

		<label for="title">
			Description:
			<input
				class="flex w-full outline outline-1 outline-[canvasText]"
				name="description"
				type="text" />
		</label>

		<label for="body">
			Body:
			<textarea
				class="flex w-full outline outline-1 outline-[canvasText]"
				name="body"
				id=""
				cols="30"
				rows="10" />
		</label>

		<label for="tags">
			Tags:
			<input class="flex w-full outline outline-1 outline-[canvasText]" name="tags" type="text" />
		</label>
	</form>
</section>

<style>
</style>
