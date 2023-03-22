<script>
</script>

<section class="m-auto w-full max-w-[60ch]">
	<h1 class="mb-[clamp(1.5rem,_calc(0.93rem_+_2.86vw),_2.5rem)]">New Blog</h1>
	<form class="flex flex-col gap-6" method="POST">
		<label for="title" class="flex flex-col gap-2">
			Title:
			<input class="flex w-full outline outline-1 outline-[canvasText]" name="title" type="text" />
		</label>

		<label for="description" class="flex flex-col gap-2">
			Description:
			<input
				class="flex w-full outline outline-1 outline-[canvasText]"
				name="description"
				type="text" />
		</label>

		<label for="body" class="flex flex-col gap-2">
			Body:
			<textarea
				placeholder=""
				class="flex w-full outline outline-1 outline-[canvasText]"
				name="body"
				id=""
				cols="30"
				rows="10" />
		</label>

		<label for="tags" class="flex flex-col gap-2">
			Tags:
			<input class="flex w-full outline outline-1 outline-[canvasText]" name="tags" type="text" />
		</label>

		<button class="btn" type="submit">Create</button>
	</form>
</section>

<style>
</style>
